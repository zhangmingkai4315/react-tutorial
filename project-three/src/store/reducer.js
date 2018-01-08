import * as actionTypes from './actions'

const initalState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0
  },
  totalPrice: 4
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
      // break;
    default:
      return state;
  }
}
export default reducers;