import * as actionTypes from '../actions/actionsTypes'

const initalState = {
  ingredients:null,
  totalPrice: 4,
  loading:true,
  error:''
}
const INGREDIENT_PRICES = {
  salad: .5,
  cheese: 1,
  bacon: 2,
  meat: 1.5
}
const reducers = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
    case actionTypes.REMOVE_INGREDIENTS:
      if (state.ingredients[action.ingredientName] === 0) {
        return state
      } else {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
          },
          totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        }
      }
    case actionTypes.FETCH_INGREDIENTS_FAIL:
      return {
        ...state,
        loading:false,
        error:action.payload
      }
    case actionTypes.SET_INGREDIENTS:
      let totalPrice = 0
      for (let k in action.payload){
        totalPrice = totalPrice + INGREDIENT_PRICES[k]
      }
      return {
        ...state,
        ingredients:action.payload,
        totalPrice : totalPrice,
        error:'',
        loading:false
      }
      // break;
    default:
      return state;
  }
}
export default reducers;