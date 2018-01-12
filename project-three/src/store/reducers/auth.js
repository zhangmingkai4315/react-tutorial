import * as actionTypes from '../actions/actionsTypes'

const initalState = {
    userId: null,
    token: null,
    loading: false,
    error: '',
    authRedirectPath:'/'
}
const reducers = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                userId: null,
                token: null
            }
        case actionTypes.SIGNUP_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                userId: action.userId,
                token: action.token
            }
        case actionTypes.SIGNUP_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.SIGNUP_BEGIN:
        case actionTypes.LOGIN_BEGIN:
            return {
                ...state,
                error: '',
                loading: true
            }
        case actionTypes.AUTH_REDIRECT_PATH:
            return {
                ...state,
                authRedirectPath:action.payload
            }
        default:
            return state;
    }
}
export default reducers;