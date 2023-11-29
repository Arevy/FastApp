/**
 * All resolvers related to users
 * @typedef {Object}
 */
export default {
	Query: {
		/**
		 * It allows to administrators users to list all users registered
		 */
		listAllUsers:  async (parent: any, args: any, context: { di: { model: { Users: { find: () => { (): any; new(): any; sort: { (arg0: { isAdmin: string; registrationDate: string; }): { (): any; new(): any; lean: { (): any; new(): any; }; }; new(): any; }; }; }; }; }; }) => {
			// context.di.authValidation.ensureThatUserIsLogged(context);

			// context.di.authValidation.ensureThatUserIsAdministrator(context);

			const sortCriteria = { isAdmin: 'desc', registrationDate: 'asc' };
			return context.di.model.Users.find().sort(sortCriteria).lean();
		}
	},
	Mutation: {
	}
};
