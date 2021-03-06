/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import getEndPoint from '@Configurations/config';
import { NEW_PASSWORD, NEW_PASSWORD_ERROR } from '@Configurations/constants';

export const newPasswordAction = dispatch => ({ token, password }) => {
	const endpoint = getEndPoint({ service: 'password_reset' });

	fetch(`${endpoint}?token=${token}&password=${password}`, {
		method: 'GET',
		header: {
			'Content-Type': 'application/json',
		},
	})
		.then(res => res.json())
		.then(response => {
			return dispatch({
				type: NEW_PASSWORD,
				payload: {
					status: response.status,
				},
			});
		})
		.catch(error => {
			return dispatch({
				type: NEW_PASSWORD_ERROR,
				payload: {
					status: false,
				},
			});
		});
};
