import React, {Component} from 'react'
import Order from './Order/Order';
import {axiosOrders} from '../../axios-instance';
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';
import Spinner from '../../components/ui/Spinner/Spinner';

class orders extends Component {
  state = {
    loading: true,
    orders: []
  }
  componentDidMount() {
    axiosOrders
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({
            id: key,
            ...res.data[key]
          })
        }
        this.setState({loading: false, orders: fetchedOrders})
      })
      .catch(err => {
        this.setState({loading: false})
      })
  }
  render() {
    let order = <Spinner/>
    if (this.state.loading === false) {
      order = this
        .state
        .orders
        .map(o => {
          return <Order key={o.id} ingredients={o.ingredients} price={+ o.price}/>
        })
    }
    return <div>{order}</div>
  }
}

export default WithErrorHandler(orders, axiosOrders)