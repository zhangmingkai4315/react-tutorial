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
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem("token",response.data.idToken)
                localStorage.setItem("userId",response.data.localId)
                localStorage.setItem("expirationDate",expirationDate)
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

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("expirationDate")
    return {type: actionTypes.LOGOUT_USER}
}

export const checkExpirtTime = (time) => {
    return (dispatch) => {
        setTimeout(() => {
            console.log('Start counter')
            dispatch(logout())
        }, parseInt(time * 1000))
    }
}



export const setAuthRedirectPath = (path)=>{
    return {
        type: actionTypes.AUTH_REDIRECT_PATH,
        payload:path
    }
}


export const authCheckState = ()=> {
    return dispatch=>{
        const token = localStorage.getItem("token")
        const userId = localStorage.getItem("userId")
        if(!token){
            dispatch(logout())
        }else{
            const expirationDate = new Date(localStorage.getItem("expirationDate"))
            if(expirationDate<new Date()){
                dispatch(logout()) 
            }else{
                dispatch(loginSuccess(userId,token))
                dispatch(checkExpirtTime((expirationDate.getTime()-new Date().getTime())/1000))
            }
        }
                
    }
}