import React, { Component } from 'react'
import Button from '../../../components/ui/Button/Button';

import css from './ContactData.css'
import Spinner from '../../../components/ui/Spinner/Spinner';
import axiosOrders from '../../../axios-orders';

export default class ContactData extends Component {
  state = {
    name:'',
    email:'',
    address:{
      street:'',
      postCode:''
    },
    loading:false
  }
  orderHandler =(event)=>{
    event.preventDefault();
    console.log(this.props)
    this.setState({loading:true})
    const order = {
      ingredients:this.props.ingredients,
      price:this.props.price,
      customer:{
        name:"mike",
        address:{
          street:'ABC',
          country:'China'
        },
        email:'mike@example.com',
      },
      info:"fast delive please...."
    }
    axiosOrders.post('/orders.json', order)
         .then(response=>{
           console.log(response.data)
           this.setState({loading:false,purchasing:false})
           alert('order success')
          })
         .catch(error=>{
           console.error(error)
           this.setState({loading: false,purchasing:false})  
          })
  }
  render() {
    let form = null;
    if(this.state.loading){
      form=<Spinner/>
    }else{
      form=(
        <div className={css.ContactData}>
          <h4>Entrer your contact data</h4>
          <form>
            <input className={css.Input} type = "text" name = "name" placeholder = "Name"/>
            <input className={css.Input} type = "email" name = "email" placeholder = "Email" />
            <input className={css.Input} type = "text" name = "street" placeholder = "Street" />
            <input className={css.Input} type = "text" name = "postCode" placeholder = "PostCode" />
            <Button buttonType="Success" clicked={this.orderHandler} >Order</Button>
          </form>
        </div>
      )
    }
    return form;
  }
}
