import {combineReducers} from 'redux'
import burgerBuilder from './burgerBuilder'
import order from './order'
import auth from './auth';

const reducers = combineReducers({"burger": burgerBuilder, "order": order, "auth": auth})

export default reducers;