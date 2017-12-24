import React from 'react'
import cssClasses from './Person.css'

const Person = (props) => {
  return (
    <div className={cssClasses["person"]}>
      <h2>Name: {props.name}{props.children}</h2>
      <p>Age: {props.age}</p>
      <small>Random: {Math.floor(Math.random() * 30)}</small>
      <div>
        <button className={cssClasses["btn"]} onClick={props.showId}>show id</button>
      <button className={cssClasses["btn"] + " " + cssClasses["delete-btn"]}  onClick={props.deleteCard}>delete</button>
      </div>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
  )
}
export default Person