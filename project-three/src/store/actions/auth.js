import * as actionTypes from './actionsTypes'
import {axiosAuth, apiConfig} from '../../axios-instance'

export const loginSuccess = (data) => {
    return {type: actionTypes.LOGIN_SUCCESS, payload: data}
}

export const loginFail = (error) => {
    return {type: actionTypes.LOGIN_FAIL, payload: error}
}

export const loginBegin = () => {
    return {type: actionTypes.LOGIN_BEGIN}
}

export const loginSubmit = (data) => {
    return (dispatch) => {
        dispatch(loginBegin())
        const authBody = {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        }
        axiosAuth
            .post(`/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiConfig.apiKey}`, authBody)
            .then((response) => {

                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                dispatch(loginFail(error))
            })
    }
}

export const signupSuccess = (data) => {
    return {type: actionTypes.SIGNUP_SUCCESS, payload: data}
}

export const signupFail = (error) => {
    return {type: actionTypes.SIGNUP_FAIL, payload: error}
}

export const signupBegin = () => {
    return {type: actionTypes.SIGNUP_BEGIN}
}

export const signupSubmit = (data) => {
    return (dispatch) => {
        dispatch(signupBegin())
        const authBody = {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        }
        axiosAuth
            .post(`identitytoolkit/v3/relyingparty/signupNewUser?key=${apiConfig.apiKey}`, authBody)
            .then((response) => {

                dispatch(loginSuccess(response.data))
            })
            .catch(error => {
                dispatch(loginFail(error))
            })
    }
}