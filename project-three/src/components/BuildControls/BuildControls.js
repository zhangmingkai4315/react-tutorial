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
    {controls.map(ctrl=>(
      <BuildControl key={ctrl.label} label={ctrl.label}/>
    ))}
  </div>
  )

export default buildControls;