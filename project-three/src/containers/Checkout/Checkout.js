import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

export class Checkout extends Component {
  state={
    ingredients:{
      salad:0,
      meat:0,
      cheese:0,
      bacon:0
    }
  }

  componentWillMount = () => {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    let price = 0
    for (let param of query.entries()){
      if(param[0]==='price'){
        price=param[1]
        continue
      }
      ingredients[param[0]]=parseInt(param[1],10)
    }
    this.setState({ingredients:ingredients,price:price})
  }
  
  orderCancel=()=>{
    console.log('cancel...')
    this.props.history.goBack()
  }
  orderContinue=()=>{
    console.log('order...')
    this.props.history.replace(this.props.match.path+'/contact-data')
  }
  render() {
    return (
      <div>
        <CheckoutSummary 
            ingredients={this.state.ingredients}
            onCancel={this.orderCancel}
            onContinue = {this.orderContinue}
            />
      
        <Route 
        path={this.props.match.path+'/contact-data'} 
        render={()=><ContactData 
          price = {this.state.price}
          ingredients={this.state.ingredients}/>}/>
      </div>
    )
  }
}

export default Checkout
