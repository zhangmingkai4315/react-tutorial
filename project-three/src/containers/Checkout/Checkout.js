import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

export class Checkout extends Component {
  state={
    ingredients:{
      salad:0,
      meat:0,
      cheese:0,
      bacon:0
    }
  }

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    for (let param of query.entries()){
      ingredients[param[0]]=parseInt(param[1],10)
    }
    this.setState({ingredients:ingredients})
  }
  
  orderCancel=()=>{
    console.log('cancel...')
    this.props.history.goBack()
  }
  orderContinue(){
    console.log('order...')
  }
  render() {
    return (
      <div>
        <CheckoutSummary 
            ingredients={this.state.ingredients}
            onCancel={this.orderCancel}
            onContinue = {this.orderContinue}
            />
      </div>
    )
  }
}

export default Checkout
