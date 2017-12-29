import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import css from './SideDrawer.css';
import Aux from '../../../HOC/Aux';
import Backdrop from '../../ui/Backdrop/Backdrop';

const sideDrawer = (props)=>{

  let attachedClasses = [css.SideDrawer,css.Close]
  if(props.open){
    attachedClasses = [css.SideDrawer,css.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} dismissModal={props.close}/>
      <div className={attachedClasses.join(' ')}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer;