import {STORE_RESULT, DELETE_RESULT} from "../actions";

const initialState = {
  results: []
}
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: [
          ...state.results, {
            id: + new Date(),
            value: action.result
          }
        ]
      }
    case DELETE_RESULT:
      console.log(action.payload)
      let newResults = state
        .results
        .filter((r) => {
          if (r.id === action.payload) {
            return false
          }
          return true
        });
      return {
        ...state,
        results: newResults
      }
    default:
      return state;
  }
}

export default resultsReducer;