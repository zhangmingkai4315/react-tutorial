import * as actionTypes from './actionsTypes'
import axiosOrders from '../../axios-orders'

export const purchaseBurgerSuccess = (id,order) =>{
  return {
    type: actionTypes.ORDER_SUCCESS,
    payload:id,
    order:order
  }
}

export const purchaseBurgerFail = (error) =>{
  return {
    type: actionTypes.ORDER_FAIL,
    payload:error
  }
}

export const purchaseBurgerBegin = () =>{
  return {
    type: actionTypes.SUBMIT_ORDER,
  }
}
export const purchaseBurgerStart = (order) => {
  return (dispatch)=>{
    dispatch(purchaseBurgerBegin())
    axiosOrders
      .post('/orders.json', order)
      .then(response => {
        console.log(response)
        dispatch(purchaseBurgerSuccess(response.data.name,order))
      })
      .catch(error => {
         dispatch(purchaseBurgerFail(error))
      })
  }
}