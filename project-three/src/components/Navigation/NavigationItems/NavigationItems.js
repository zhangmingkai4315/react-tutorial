import React from 'react'
import css from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = ()=>(
  <ul className={css.NavigationItems}>
    <NavigationItem link="/" active={true}>
      BurgerBuilder
    </NavigationItem>
    <NavigationItem link="/checkout">
      Checkout
    </NavigationItem>    
  </ul>
)

export default navigationItems;