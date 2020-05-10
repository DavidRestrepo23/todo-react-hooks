import { REGISTER_OK, REGISTER_ERROR, LOGIN_ERROR, LOGIN_OK, GET_USER_AUTH, LOGOUT } from './actionType';
import clientAxios from '../../../config/axios';
import AuthToken from '../../../config/token';

/**
 * create alert
 * @param {*} data 
 */
const messages = data => {

    return alert = {
        msg: data.msg,
        category: data.category
    };

}

/**
 * Register user
 * @param {*} data 
 */
export const registerUser = (data) => {

    return async (dispatch) => {
        await clientAxios.post('/api/users', data).then(response => {
            let alert = messages({ msg: 'Your account has been created successfully', category: 'alert-ok' });
            dispatch({ type: REGISTER_OK, payload: alert });
        }).catch(error => {
            let alert = messages({ msg: error.response.data.msg, category: 'alert-error' });
            dispatch({ type: REGISTER_ERROR, payload: alert })
        });
    }

}

/**
 * Login
 * @param {*} data
 */
export const login = (data) => {
    return async (dispatch) => {
        await clientAxios.post('/api/auth', data).then(response => {
            dispatch({ type: LOGIN_OK, payload: response.data });
        }).catch(error => {
            let alert = messages({ msg: error.response.data.msg, category: 'alert-error' });
            dispatch({ type: LOGIN_ERROR, payload: alert })
        });
    }
}

/**
 * Get User Authenticated
 */
export const getUserAuthenticated = () => {

    const token = localStorage.getItem('token');

    //add token to headers
    if (token) {
        AuthToken(token);
    }

    return async (dispatch) => {
        await clientAxios.get('/api/users').then(response => {
            dispatch({ type: GET_USER_AUTH, payload: response.data });
        }).catch(error => {
            let alert = messages({ msg: error.response.data.msg, category: 'alert-error' });
            dispatch({ type: LOGIN_ERROR, payload: alert })
        });
    }

}

/**
 * Close session
 */
export const logout = () => {
    return {
        type: LOGOUT
    }
}