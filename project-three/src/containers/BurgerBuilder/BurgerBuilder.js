import React, {Component} from 'react'
import {connect} from 'react-redux'
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/ui/Spinner/Spinner';
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import axiosOrders from '../../axios-orders';
import * as actionType from '../../store/actions';

const BASE_PRICE = 4
class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false
  }
  purchaseHandler = () => {
    this.setState({purchasing: true})
  }
  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinue = () => {
    this
      .props
      .history
      .push({pathname: '/checkout'})
  }
  render() {
    const disableInfo = {
      ...this.props.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    let modalContent = <OrderSummary
      onContinue={this.purchaseContinue}
      onCancel={this.purchaseCancelHandler}
      ingredients={this.props.ingredients}/>
    if (this.state.loading) {
      modalContent = <Spinner/>
    }
    return (
      <Aux>
        <Modal dismissModal={this.purchaseCancelHandler} show={this.state.purchasing}>
          {modalContent}
        </Modal>
        <Burger ingredients={this.props.ingredients}/>
        <BuildControls
          ordered={this.purchaseHandler}
          disableOrder=
          {this.props.totalPrice<=BASE_PRICE}
          currentPrice={this.props.totalPrice}
          disableInfo={disableInfo}
          removeIngredient={this.props.onRemoveIngredients}
          addIngredient={this.props.onAddIngredients}/>
      </Aux>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredients: (name) => {
      dispatch({type: actionType.ADD_INGREDIENTS, ingredientName: name})
    },
    onRemoveIngredients: (name) => {
      dispatch({type: actionType.REMOVE_INGREDIENTS, ingredientName: name})
    }
  }
}

const mapStateToProps = state => {
  return {ingredients: state.ingredients, totalPrice: state.totalPrice}
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axiosOrders))