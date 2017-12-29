import React from 'react'
import css from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props)=>(
  <header className={css.Toolbar}>
    <div className={css.Menu} onClick={props.openMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={css.Logo}>
      <Logo/>
    </div>
    <nav className={css.DesktopOnly}>
    <NavigationItems/>
    </nav>
  </header>
)

export default toolbar;