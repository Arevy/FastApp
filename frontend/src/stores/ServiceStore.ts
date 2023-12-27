import { makeAutoObservable } from 'mobx';
// import { listAllServices, createService, updateService, deleteService } from '../graphql/queries'; // Import GraphQL queries

class ServiceStore {
    services = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchServices() {
        // const result = await listAllServices(); // GraphQL query
        // this.services = result.data;
    }

    // async addService(serviceData) {
    //     const result = await createService(serviceData); // GraphQL mutation
    //     // Update store based on result
    // }

    // async updateService(serviceId, newData) {
    //     await updateService(serviceId, newData); // GraphQL mutation
    //     // Update store based on result
    // }

    // async removeService(serviceId) {
    //     await deleteService(serviceId); // GraphQL mutation
    //     // Update store based on result
    // }

    // Additional actions and computed values as needed
}

export default ServiceStore;
