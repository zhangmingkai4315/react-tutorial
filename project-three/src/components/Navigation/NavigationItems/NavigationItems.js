import React from 'react'
import css from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../HOC/Aux';
const navigationItems = (props) => (
  <ul className={css.NavigationItems}>
    <NavigationItem link="/" exact>
      BurgerBuilder
    </NavigationItem>


    {props.isAuth===false?(
    <NavigationItem link="/Login">
      Login
    </NavigationItem>):(
    <Aux>
      <NavigationItem link="/checkout">
        Checkout
      </NavigationItem>
      <NavigationItem link="/order">
        Orders
      </NavigationItem>
      <NavigationItem link="/Logout">
        Logout
      </NavigationItem>
    </Aux>
    )}
  </ul>
)
export default navigationItems;