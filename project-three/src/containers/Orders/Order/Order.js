import React from 'react'
import css from './Order.css';
const order = (props)=>{
  let ingredients = [];
  for(let i in props.ingredients){
    ingredients.push({name:i,
      amount:props.ingredients[i]})
  }
  const ingredientOutput = ingredients.map(i => {
    return <span key={i.name} style={
      {
        textTransform:'capitalize',
        display:'inline-block',
        border:"1px solid #ccc",
        padding:"2px 5px" 
      }
    }>{i.name} ({i.amount})</span>
  })
  return(
      <div className={css.Order}>
        <p>Orders:{ ingredientOutput} </p>
        <p>Price: <b>USD {props.price}</b></p>
      </div>
  )
}

export default order;