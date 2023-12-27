import { makeAutoObservable } from 'mobx';
import UserStore from './UserStore';
import ServiceStore from './ServiceStore';
import AppointmentStore from './AppointmentStore';
import AuthStore from './AuthStore';
// ... import other stores

class RootStore {
	userStore: UserStore;
	serviceStore: ServiceStore;
	appointmentStore: AppointmentStore;
	authStore: AuthStore;
	// ... other stores

	constructor() {
		makeAutoObservable(this);
		this.authStore = new AuthStore();
		this.userStore = new UserStore();
		this.serviceStore = new ServiceStore();
		this.appointmentStore = new AppointmentStore();
		// ... initialize other stores
	}
}

export default RootStore;
