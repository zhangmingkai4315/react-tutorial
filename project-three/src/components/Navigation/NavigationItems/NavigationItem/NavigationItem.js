import React from 'react';
import css from "./NavigationItem.css"
import NavLink from 'react-router-dom/NavLink';
const navigationItem = (props) => (
  <li className={css.NavigationItem} >
      <NavLink 
      exact={props.exact}
      to={props.link} 
      activeClassName={css.active}
      >{props.children}</NavLink>
  </li>
)

export default navigationItem;