import { Fragment, useContext } from 'react';

import { AuthContext } from '../AuthContext';

import { PageTitle } from '../components/PageTitle';
import { RegisterForm } from '../components/RegisterForm';
import React from 'react';


export const Registration = () => {

	const { activateAuth } = useContext(AuthContext);

	return (
		<Fragment>
			<PageTitle text='Create an account' />
			<RegisterForm activateAuth={activateAuth} />
		</Fragment>
	);
};