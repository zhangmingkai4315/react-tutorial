import React from 'react'
import css from './Button.css';
const button =(props)=>(
  <button 
    onClick={props.clicked}
    className={[css.Button,css[props.buttonType]].join(' ')}>{props.children}</button>
)

export default button;