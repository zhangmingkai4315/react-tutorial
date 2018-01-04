import React, {Component} from 'react'
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/ui/Spinner/Spinner';
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import axiosOrders from '../../axios-orders';

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
    loading:false,
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
    const queryParams = []
    for (let i in this.state.ingredients){
      queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
    }
    this.props.history.push({
      pathname:'/checkout',
      search:queryParams.join('&')
    }) 
    // this.setState({loading:true})
    // const order = {
    //   ingredients:this.state.ingredients,
    //   price:this.state.totalPrice,
    //   customer:{
    //     name:"mike",
    //     address:{
    //       street:'ABC',
    //       country:'China'
    //     },
    //     email:'mike@example.com',
    //   },
    //   info:"fast delive please...."
    // }
    // axios.post('/orders.json', order)
    //      .then(response=>{
    //        console.log(response.data)
    //        this.setState({loading:false,purchasing:false})
    //        alert('order success')
    //       })
    //      .catch(error=>{
    //        console.error(error)
    //        this.setState({loading: false,purchasing:false})  
    //       })
  }
  render(){
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo){
      disableInfo[key]=disableInfo[key]<=0
    }
    let modalContent = <OrderSummary
      onContinue={this.purchaseContinue}
      onCancel={this.purchaseCancelHandler}
      ingredients={this.state.ingredients}/>
    if (this.state.loading){
      modalContent=<Spinner/>
    }
    return (
      <Aux>
        <Modal
          dismissModal={this.purchaseCancelHandler}
          show={this.state.purchasing}>
          {modalContent}
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

export default WithErrorHandler(BurgerBuilder,axiosOrders)