import { onSnapshot } from 'mobx-state-tree';
import RootStore from './RootStore';

export const initializeSnapshot = (rootStore: RootStore) => {
    // onSnapshot(rootStore, (snapshot) => {
    //     console.log('Snapshot: ', snapshot);
    //     // Here you can save the snapshot to localStorage or handle it as needed
    // });
};
