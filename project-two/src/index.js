import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App/> , document.getElementById('root'));
// 注册一个service worker来管理缓存
registerServiceWorker();