/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import getEndPoint from '@Configurations/config';
import { GOOGLE_LOG_IN, GOOGLE_LOG_IN_ERROR } from '@Configurations/constants';
import { setLocalStorage } from '@Helpers/localstorage.helper';

export const googleOuathAction = dispatch => data => {
	const endpoint = getEndPoint({
		path: 'googleOauth',
		service: 'google-login-service',
	});

	fetch(`${endpoint}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(response => {
			setLocalStorage({
				key: 'token',
				value: response.data.user.jwt,
			});

			return dispatch({
				type: GOOGLE_LOG_IN,
				payload: {
					isLogin: response.data.logged_in,
					userData: response.data.user,
				},
			});
		})
		.catch(err => {
			return dispatch({
				type: GOOGLE_LOG_IN_ERROR,
				payload: {
					isLogin: false,
					error,
				},
			});
		});
};
