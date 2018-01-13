import React, {Component} from 'react';
import {Route, Switch,withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux' 
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Login from './containers/Auth/Login';
import Logout from './containers/Auth/Logout';
import {authCheckState} from './store/actions'
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoLogin()
  }

  render() {
    let router =null
    if (this.props.isAuth) {
      router = (
        <Switch>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/order' component={Orders}/>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' component={BurgerBuilder}/>
        </Switch>
      )
    }else{
      router = (
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' exact component={BurgerBuilder}/>
          <Redirect to="/"/>
        </Switch>
      )      
    }
    return (
      <Layout>
        {router}
      </Layout>
    );
  }
}
const mapStateToProps = state =>{
  return {
    isAuth: state.auth.token!==null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin:()=> {dispatch(authCheckState())}
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
