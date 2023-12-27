import React from 'react';
import RootStore from './RootStore';

export const RootStoreContext = React.createContext<RootStore>(new RootStore());

export const useStores = () => React.useContext(RootStoreContext);
