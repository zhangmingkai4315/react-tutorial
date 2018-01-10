import React from 'react'
import css from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
  <ul className={css.NavigationItems}>
    <NavigationItem link="/" exact>
      BurgerBuilder
    </NavigationItem>
    <NavigationItem link="/checkout">
      Checkout
    </NavigationItem>
    <NavigationItem link="/order">
      Orders
    </NavigationItem>
    < NavigationItem link="/Login">
      Login
    </NavigationItem>
  </ul>
)
export default navigationItems;