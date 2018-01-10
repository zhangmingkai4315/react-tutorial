import * as actionTypes from './actionsTypes'
import {axiosOrders} from '../../axios-instance'

export const purchaseBurgerSuccess = (id, order) => {
  return {type: actionTypes.ORDER_SUCCESS, payload: id, order: order}
}

export const purchaseBurgerFail = (error) => {
  return {type: actionTypes.ORDER_FAIL, payload: error}
}

export const purchaseBurgerBegin = () => {
  return {type: actionTypes.SUBMIT_ORDER}
}
export const purchaseBurgerStart = (order) => {
  return (dispatch) => {
    dispatch(purchaseBurgerBegin())
    axiosOrders
      .post('/orders.json', order)
      .then(response => {
        console.log(response)
        dispatch(purchaseBurgerSuccess(response.data.name, order))
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error))
      })
  }
}

const fetchOrdersSuccess= (orders)=>{
  return {
    type:actionTypes.FETCH_ORDERS_SUCCESS,
    payload:orders
  }
}
const fetchOrdersFail = (orders) => {
  return {type: actionTypes.FETCH_ORDERS_FAIL}
}

const fetchOrdersStart = (orders) => {
  return {type: actionTypes.FETCH_ORDERS_START}
}
export const fetchOrders =(token)=>{
  return dispatch =>{
    dispatch(fetchOrdersStart())
    axiosOrders.get('/orders.json?auth='+token||'')
               .then(res=>{
                 const orders = []
                 for (let key in res.data){
                   orders.push({
                     ...res.data[key],
                     id:key
                   });
                 }
                 dispatch(fetchOrdersSuccess(orders));
               })
               .catch(error=>{
                 dispatch(fetchOrdersFail());
               })
  }
}