import React from 'react'
import Burger from '../../Burger/Burger';
import Button from '../../ui/Button/Button';
import css from './CheckoutSummary.css'
const checkoutSummary = (props) =>{
  return (
    <div className={css.CheckoutSummary}>
        <h1>We hope it tastes wells</h1>
        <div style={{width:'100%',margin:'auto'}}>
          <Burger ingredients = {props.ingredients}/>
        </div>
        <Button buttonType="Danger" clicked={props.onCancel}>Cancel</Button>
        <Button buttonType="Success" clicked={props.onContinue}>Continue</Button>
    </div>
  )
}

export default checkoutSummary;