import { API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest, putJsonRequest } from '../modules/requests';

/**
 * Login from app
 */
export const logIn = data => postJsonRequest(`${API_BASE_URL}/api/sessions`, data);

/**
 * Logout from app
 */
export const logOut = () => putJsonRequest(`${API_BASE_URL}/api/logout`);

/** 
 * Register User
 *  */

export const register = data => postJsonRequest(`${API_BASE_URL}/api/registrations`, data);


/**
 *  Login with google
 */
export const googleLogin = data => postJsonRequest(`${API_BASE_URL}/auth/google_login_service`, data);