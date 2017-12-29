import React from 'react'
import css from './Logo.css'
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) =>(
  <div className={css.Logo}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
)

export default logo;