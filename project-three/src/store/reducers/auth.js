import * as actionTypes from '../actions/actionsTypes'

const initalState = {
    user: null,
    loading: false,
    error: ''
}
const reducers = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                user: action.payload
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
        default:
            return state;
    }
}
export default reducers;