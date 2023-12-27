import { makeAutoObservable } from 'mobx';
// import { userAppointments, createAppointment, updateAppointment, deleteAppointment } from '../graphql/queries'; // Import GraphQL queries

class AppointmentStore {
    appointments = [];

    constructor() {
        makeAutoObservable(this);
    }

    // async fetchUserAppointments(userId) {
    //     const result = await userAppointments(userId); // GraphQL query
    //     this.appointments = result.data;
    // }

    // async scheduleAppointment(appointmentData) {
    //     const result = await createAppointment(appointmentData); // GraphQL mutation
    //     // Update store based on result
    // }

    // async modifyAppointment(appointmentId, newData) {
    //     await updateAppointment(appointmentId, newData); // GraphQL mutation
    //     // Update store based on result
    // }

    // async cancelAppointment(appointmentId) {
    //     await deleteAppointment(appointmentId); // GraphQL mutation
    //     // Update store based on result
    // }

    // Additional actions and computed values as needed
}

export default AppointmentStore;
