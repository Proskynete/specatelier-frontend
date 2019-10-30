/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { googleOuathAction } from '@Actions/';

export const handleFormatResponse = googleResponse => ({
	user: {
		name: googleResponse.w3.ofa,
		last_name: googleResponse.w3.wea,
		email: googleResponse.profileObj.email,
		google_token: googleResponse.accessToken,
	},
});

export const handleManagerResponseGoogleService = (
	response,
	googleOuathMethod,
) => {
	const prettieFormatResponse = handleFormatResponse(response);
	googleOuathMethod(prettieFormatResponse);
};

const ButtonGoogleLogin = props => {
	const { label, googleOuathMethod } = props;

	return (
		<GoogleLogin
			clientId={process.env.GOOGLE_CLIENT_ID}
			buttonText={label}
			onSuccess={res =>
				handleManagerResponseGoogleService(res, googleOuathMethod)
			}
			onFailure={res =>
				handleManagerResponseGoogleService(res, googleOuathMethod)
			}
		/>
	);
};

ButtonGoogleLogin.propTypes = {
	label: PropTypes.string.isRequired,
	googleOuathMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		googleOuathMethod: googleOuathAction(dispatch),
	}),
)(ButtonGoogleLogin);
