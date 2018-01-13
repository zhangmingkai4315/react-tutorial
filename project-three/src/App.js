import React, {Component} from 'react';
import {Route, Switch,withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux' 
import Layout from './components/Layout/Layout';
import Logout from './containers/Auth/Logout';
import {authCheckState} from './store/actions';
import AsyncComponent from './HOC/asyncComponent/asyncComponent'
const asyncCheckout = AsyncComponent(()=>{
  return import('./containers/Checkout/Checkout')
})
const asyncOrders = AsyncComponent(() => {
  return import ('./containers/Orders/Orders')
})
const asyncBurgerBuilder = AsyncComponent(() => {
  return import ('./containers/BurgerBuilder/BurgerBuilder')
})
const asyncLogin = AsyncComponent(() => {
  return import ('./containers/Auth/Login')
})
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoLogin()
  }

  render() {
    let router =null
    if (this.props.isAuth) {
      router = (
        <Switch>
          <Route path='/checkout' component={asyncCheckout}/>
          <Route path='/order' component={asyncOrders}/>
          <Route path='/login' component={asyncLogin}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' component={asyncBurgerBuilder}/>
        </Switch>
      )
    }else{
      router = (
        <Switch>
          <Route path='/login' component={asyncLogin}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/' exact component={asyncBurgerBuilder}/>
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
