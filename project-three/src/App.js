import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Login from './containers/Auth/Login';
import Logout from './containers/Auth/Logout';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/order' component={Orders}/>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' component={BurgerBuilder}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
