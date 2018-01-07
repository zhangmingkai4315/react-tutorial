const redux = require('redux')
const createStore = redux.createStore;
const initialState = {
  counter: 0
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value
      }
    case "DEC_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      break;
  }
  return state;
}

const store = createStore(rootReducer)
// subscription

store.subscribe((state) => {
  console.log("sub:" + JSON.stringify(store.getState()))
})

store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10})

console.log(store.getState());

// sub:{"counter":1} sub:{"counter":2} sub:{"counter":12} { counter: 12 }