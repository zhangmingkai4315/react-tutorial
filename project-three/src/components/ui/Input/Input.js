import React from 'react'
import css from './Input.css'
const input = (props) => {
  let inputElem = null
  const inputClasses = [css.InputElement]
  if (!props.valid && props.shouldValidate) {
    inputClasses.push(css.Invalid)
  }

  switch (props.inputtype) {
    case('select'):
      inputElem = <select
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}>
        {props
          .config
          .options
          .map(o => (
            <option key={o.value} value={o.value}>{o.displayValue}</option>
          ))}
      </select>
      break;
    case('textarea'):
      inputElem = <textarea
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}
        {...props}/>
      break;
    default:
      inputElem = <input
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}
        {...props}/>
  }
  return (
    <div className={css.Input}>
      <label className={css.Label}>{props.label}</label>
      {inputElem}
    </div>
  )
}

export default input