import React from 'react'

import css from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
const controls =[
  {label: 'Salad',type:'salad'},
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
]
const buildControls =(props) =>(
  <div className={css.BuildControls}>
    <div>Total Price is :<b>{props.currentPrice}$</b></div>
    {controls.map(ctrl=>(
      <BuildControl
      disabled={props.disableInfo[ctrl.type]}
      key={ctrl.label} 
      type={ctrl.type}
      remove={props.removeIngredient}
      add={props.addIngredient} 
      label={ctrl.label}/>
    ))}
    {props.isAuth===true?(
    <button
    onClick={props.ordered}
    className={css.OrderBtn} 
    disabled={props.disableOrder}>Order</button>):(
  <button  
  onClick={props.goAuth}
  className={css.OrderBtn}>Go to Auth</button>)}
  </div>
  )

export default buildControls;