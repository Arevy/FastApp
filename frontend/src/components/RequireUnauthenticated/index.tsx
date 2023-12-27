import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useStores } from 'src/stores/RootStoreContext';

interface RequireUnauthenticatedProps {
	children: ReactNode;
}

const RequireUnauthenticated: React.FC<RequireUnauthenticatedProps> = ({ children }) => {
	const { authStore: { isAuth } } = useStores();

	if (isAuth) {
		return <Navigate to='/' />;
	}

	return <>{children}</>;
};

export default RequireUnauthenticated;
