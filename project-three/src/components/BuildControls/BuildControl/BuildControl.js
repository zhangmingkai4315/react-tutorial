import React from 'react'
import css from './BuildControl.css'

const buildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.label}</div>
    <button disabled ={props.disabled} className={css.Less} onClick={props.remove.bind(null, props.type)}>Less</button>
    <button className={css.More} onClick={props.add.bind(null,props.type)}>More</button>
  </div>
)

export default buildControl;