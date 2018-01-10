import * as actionTypes from '../actions/actionsTypes'

const initalState = {
  orders: [],
  loading: false,
  error: ''
}
const reducers = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_ORDER:
      return {
        ...state,
        loading:true,
        error:''
      }
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders:action.payload,
        loading:false,
        error:''
      }
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        orders:[],
        loading:false,
        error:action.payload
      }
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading:true,
      }
    case actionTypes.ORDER_SUCCESS:
      return {
        ...state,
        orders : state.orders.concat({...action.order,id:action.id}),
        loading:false,
      }
    case actionTypes.ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}
export default reducers;