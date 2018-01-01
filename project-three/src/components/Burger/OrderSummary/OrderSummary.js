import React from 'react'
import Aux from '../../../HOC/Aux';
import Button from '../../ui/Button/Button.js'
const orderSummary  = (props)=>{
  const summary = Object.keys(props.ingredients).map(key=>{
    return (
      <li key={key}>{key}:{props.ingredients[key]}</li>
    )
  })
  return (
  <Aux>
      <h3>Order Summary</h3>
      <p>Your order infomation:</p>
      <ul>
        {summary}
      </ul>
      <br/>
      <Button buttonType="Danger" clicked={props.onCancel}>Cancel</Button>
      <Button buttonType="Success" clicked={props.onContinue}>Continue</Button>
  </Aux>
)
}
export default orderSummary;