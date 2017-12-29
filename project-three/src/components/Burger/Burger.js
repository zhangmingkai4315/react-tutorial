import React from 'react';
import css from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
const burger = (props)=>{
  let burgerIngredient = Object.keys(props.ingredients)
    .map(type => [...Array(props.ingredients[type])].map((_,i)=>(
        <BurgerIngredient key={type+i} type={type}/>)
      ))
      .reduce((arr,curr)=>{
         return arr.concat(curr)
      },[])
  
  if(burgerIngredient.length===0){
    burgerIngredient = "please add some food"
  }
      
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top"/>
      {burgerIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger