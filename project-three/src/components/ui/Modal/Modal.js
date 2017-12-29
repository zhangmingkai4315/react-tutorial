import React from 'react'
import css from './Modal.css'
import Aux from '../../../HOC/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props)=>{
  return (
    <Aux>
      <Backdrop show={props.show} dismissModal={props.dismissModal}/>
    <div className={css.Modal} 
         style={{
           transform:props.show?"translateY(0)":"translateY(-100vh)",
           opacity:props.show?1:0
          }}>
      {props.children}
    </div>
    </Aux>
  )

}


export default modal;