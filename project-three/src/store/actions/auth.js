import * as actionTypes from './actionsTypes'
import {axiosAuth, apiConfig} from '../../axios-instance'

export const loginSuccess = (userId, token) => {
    return {type: actionTypes.LOGIN_SUCCESS, userId, token}
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
                dispatch(loginSuccess(response.data.localId, response.data.idToken))
                dispatch(checkExpirtTime(response.data.expiresIn))
            })
            .catch(error => {
                dispatch(signupFail(error.response.data.error.message))
            })
    }
}
export const signupSuccess = (userId, token) => {
    return {type: actionTypes.SIGNUP_SUCCESS, userId, token}
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
                dispatch(signupSuccess(response.data.localId, response.data.idToken))
                dispatch(checkExpirtTime(response.data.expiresIn))
            })
            .catch(error => {
                if (error && error.response) {
                    dispatch(signupFail(error.response.data.error.message))

                } else {
                    dispatch(signupFail("server fail"))
                }

            })
    }
}

export const logoutUser = () => {
    return {type: actionTypes.LOGOUT_USER}
}

export const checkExpirtTime = (time) => {
    return (dispatch) => {
        setTimeout(() => {
            console.log('Start counter')
            dispatch(logoutUser())
        }, parseInt(time * 1000))
    }
}