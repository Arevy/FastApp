
import { logger } from "./logger.js";


export const requestDevLogger = {
	// Fires whenever a GraphQL request is received from a client
	requestDidStart(requestContext: { request: { query: string; variables: any; }; }) {

		/* List of regex to filter queries from logger */
		const excludeThisQueryFromLogger = [/query IntrospectionQuery/];

		const avoidLog = excludeThisQueryFromLogger.some(excludedQuery => requestContext.request.query.match(excludedQuery));

		if (avoidLog) {
			return;
		}

		logger.debug('Query:');
		logger.debug(`\n${requestContext.request.query}`);

		logger.debug('Variables:');
		logger.debug(requestContext.request.variables);

		return {
			// Fires whenever Apollo Server is about to send a response for a GraphQL operation
			willSendResponse(requestContext: { response: { data: any; errors: any[]; }; }) {
				logger.debug('Response data:');
				logger.debug(requestContext.response.data);

				if (requestContext.response.errors) {
					logger.debug(`Response errors (number of errors: ${requestContext.response.errors.length}):`);
					requestContext.response.errors.forEach((err: { message: any; }) => logger.debug(err.message));
				}
			}
		};
	}
};
