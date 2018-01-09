import * as actionTypes from './actionsTypes'
import axiosOrders from '../../axios-orders';

export const addIngredient = (name)=>{
  return {
    type : actionTypes.ADD_INGREDIENTS,
    ingredientName: name
  }
}

export const removeIngredient = (name)=>{
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name
  }
}

export const setIngredients = (ingredients) => {
  return {
    type:actionTypes.SET_INGREDIENTS,
    payload:ingredients
  }
}

export const fetchIngredientsFail = (error) => {
  return {
    type:actionTypes.FETCH_INGREDIENTS_FAIL,
    payload:error
  }
}
export const initIngredients =()=>{
  return (disptach)=>{
    axiosOrders.get('/ingredient.json')
               .then(res=>{
                 disptach(setIngredients(res.data))
               })
               .catch(err=>{
                 disptach(fetchIngredientsFail(err))
               })
  }
}