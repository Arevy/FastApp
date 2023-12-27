import { makeAutoObservable } from 'mobx';
import jwt from 'jsonwebtoken';
import {
    saveSession,
    recoverSession,
    deleteSession,
    storeUserDataOnSessionStorage,
    recoverUserDataFromSessionStorage,
    deleteUserDataFromSessionStorage
} from '../utils/session'; // Adjust the import path as needed

export interface UserData {
    email: string;
    isAdmin: boolean;
    isActive: boolean;
    uuid: string;
}

class AuthStore {
    isAuth = !!recoverSession('token');
    userData: UserData = { email: '', isAdmin: false, isActive: false, uuid: '' };

    constructor() {
        makeAutoObservable(this);
        // Recover user data if it exists in session storage
        recoverUserDataFromSessionStorage();
    }

    activateAuth(token: string) {
        const decodedToken = jwt.decode(token) as Partial<UserData> || {};
        const userData = {
            email: decodedToken.email || '',
            isAdmin: !!decodedToken.isAdmin,
            isActive: !!decodedToken.isActive,
            uuid: decodedToken.uuid || '',
        };

        this.userData = userData;
        this.isAuth = true;
        storeUserDataOnSessionStorage();
        saveSession('token', token);
    }

    removeAuth() {
        deleteUserDataFromSessionStorage();
        deleteSession();
        this.isAuth = false;
        this.userData = { email: '', isAdmin: false, isActive: false, uuid: '' };
    }

    // Additional actions as needed
}

export default AuthStore;
