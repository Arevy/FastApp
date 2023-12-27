import AuthStore from "src/stores/AuthStore";

// Assume AuthStore is provided as a global or through some context
const authStore = new AuthStore();

function saveSession(name: string, data: string): void {
	sessionStorage.setItem(name, data);
}

function recoverSession(name: string): string | null {
	return sessionStorage.getItem(name);
}

function deleteSession(): void {
	sessionStorage.clear();
}

function storeUserDataOnSessionStorage(): void {
	const userData = authStore.userData;
	sessionStorage.setItem('userData', JSON.stringify(userData));
}

function recoverUserDataFromSessionStorage(): void {
	const userDataString = sessionStorage.getItem('userData');
	if (userDataString) {
		const userData = JSON.parse(userDataString);
		authStore.activateAuth(userData);
	}
}

function deleteUserDataFromSessionStorage(): void {
	sessionStorage.removeItem('userData');
}

export {
	saveSession,
	recoverSession,
	deleteSession,
	storeUserDataOnSessionStorage,
	recoverUserDataFromSessionStorage,
	deleteUserDataFromSessionStorage,
};
