import {combineReducers} from 'redux'
import burgerBuilder from './burgerBuilder'
import order from './order'
 
const reducers = combineReducers({
  "burger":burgerBuilder,
  "order":order,
})

export default reducers;