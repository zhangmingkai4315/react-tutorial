import React, {Component} from 'react'
import {connect} from 'react-redux'
import Order from './Order/Order';
import {axiosOrders} from '../../axios-instance';
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import Spinner from '../../components/ui/Spinner/Spinner';
import {fetchOrders} from '../../store/actions'
class orders extends Component {
  componentDidMount() {
    this.props.onInitOrdersList(this.props.token)
  }
  render() {
    let order = <Spinner/>
    if (this.props.loading === false) {
      order = this
        .props
        .orders
        .map(o => {
          return <Order key={o.id} ingredients={o.ingredients} price={+ o.price}/>
        })
    }
    return <div>{order}</div>
  }
}

const mapStatToProps = (state)=>{
  return {
      orders:state.order.orders,
      loading:state.order.loading,
      token:state.auth.token,
  }
} 
const mapDispatchToProps = (dispatch)=>{
  return {
    onInitOrdersList:(token)=>{
      dispatch(fetchOrders(token))
    }
  }
}
export default connect(mapStatToProps, mapDispatchToProps)(WithErrorHandler(orders, axiosOrders))