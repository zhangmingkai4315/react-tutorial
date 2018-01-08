import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reuducer from './store/reducers';
import middlerware from './store/middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reuducer,composeEnhancers(applyMiddleware(...middlerware)))
// const store = createStore(reuducer,applyMiddleware(...middlerware))

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
