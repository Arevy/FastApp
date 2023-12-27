import { makeAutoObservable } from 'mobx';
// import { getUserAppointments, registerUser } from '../graphql/queries'; // Import your GraphQL queries

class UserStore {
  users = [];
  appointments = [];

  constructor() {
    makeAutoObservable(this);
  }

//   async register(newUser) {
//     const result = await registerUser(newUser); // GraphQL mutation
//     // Update store based on result
//   }

//   async loadUserAppointments(userId) {
//     const result = await getUserAppointments(userId); // GraphQL query
//     this.appointments = result.data;
//   }

  // Additional actions and computed values as needed
}

export default UserStore;
