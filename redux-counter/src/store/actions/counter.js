import * as actionTypes from './actionsTypes'

export const increment = () => {
  return function (dispatch,getState) {
    console.log(getState())
    setTimeout(() => {
      dispatch({type: actionTypes.INCREMENT})
    }, 2000)
  }
}

export const decrement = () => {
  return {type: actionTypes.DECREMENT}
}

export const storeResult = (result) => {
  return {type: actionTypes.STORE_RESULT, result: result}
}

export const deleteResult = (index) => {
  return {type: actionTypes.DELETE_RESULT, payload: index}
}