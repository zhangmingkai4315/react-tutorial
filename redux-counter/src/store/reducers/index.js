import {combineReducers} from 'redux'
import counterReducer from './counter'
import resultsReducer from './results'


const reducers = combineReducers({counter: counterReducer, results: resultsReducer})

export default reducers;