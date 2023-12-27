import { Fragment } from 'react';
import { PageTitle } from '../components/PageTitle';
import { RegisterForm } from '../components/RegisterForm';
import React from 'react';
import { useStores } from 'src/stores/RootStoreContext';


export const Registration = () => {

	const { authStore: { activateAuth } } = useStores();

	return (
		<Fragment>
			<PageTitle text='Create an account' />
			<RegisterForm activateAuth={activateAuth} />
		</Fragment>
	);
};