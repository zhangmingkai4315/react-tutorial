import React, {Component} from 'react'
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad:.5,
  cheese:1,
  bacon:2,
  meat:1.5
}
const BASE_PRICE=4
class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice: BASE_PRICE,
    purchasing:false,
  }
  addIngredientHandler = (type)=>{
    console.log(type)
    const oldCount = this.state.ingredients[type]
    const updateCounted = oldCount+1
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type]=updateCounted
    const newPrice = this.state.totalPrice+INGREDIENT_PRICES[type]
    this.setState({ingredients:updateIngredients,totalPrice:newPrice})
  }
  removeIngredient = (type) => {
    console.log(type)
    const oldCount = this.state.ingredients[type]
    if(oldCount===0){
      return
    }
    const updateCounted = oldCount-1
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCounted
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice })

  }
  purchaseHandler=()=>{
    this.setState({purchasing:true})
  }
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }
  purchaseContinue=()=>{
    
  }
  render(){
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo){
      disableInfo[key]=disableInfo[key]<=0
    }
    return (
      <Aux>
        <Modal
          dismissModal={this.purchaseCancelHandler}
          show={this.state.purchasing}>
          <OrderSummary 
          onContinue = {this.purchaseContinue}
          onCancel={this.purchaseCancelHandler}
          ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ordered={this.purchaseHandler}
          disableOrder = {this.state.totalPrice<=BASE_PRICE}
          currentPrice = {this.state.totalPrice}
          disableInfo={disableInfo}
          removeIngredient={this.removeIngredient}
          addIngredient = {this.addIngredientHandler}        
        />
      </Aux>
    )
  }
}

export default BurgerBuilder