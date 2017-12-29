import React from 'react'
import css from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props)=>(
  <header className={css.Toolbar}>
    <div>Menu</div>
    <Logo/>
    <NavigationItems/>
  </header>
)

export default toolbar;