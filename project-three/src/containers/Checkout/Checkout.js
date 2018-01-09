import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  orderCancel = () => {
    console.log('cancel...')
    this
      .props
      .history
      .goBack()
  }
  orderContinue = () => {
    console.log('order...')
    this
      .props
      .history
      .replace(this.props.match.path + '/contact-data')
  }

  
  render(){
    let summary = this.props.ingredients?< CheckoutSummary
            ingredients={this.props.ingredients}
            onCancel={this.orderCancel}
            onContinue={this.orderContinue} />:<Redirect to='/'/>
    return (
      <div>
        {summary}
        <Route
          path={this.props.match.path + '/contact-data'}
          component ={ContactData}
          />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients , 
    totalPrice: state.burger.totalPrice
  }
}

// export connected Checkout
export default connect(mapStateToProps)(Checkout)