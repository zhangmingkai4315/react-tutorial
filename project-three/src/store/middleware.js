import thunk from 'redux-thunk'

const logger = store => {
  return next => {
    return action => {
      console.log('[middleware] Dispatching', action);
      const result = next(action);
      console.log('[middle] Next state ', store.getState())
      return result;
    }
  }
}

export default [logger,thunk]