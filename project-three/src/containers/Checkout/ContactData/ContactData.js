import React, {Component} from 'react'
import Button from '../../../components/ui/Button/Button';
import {connect} from 'react-redux'
import css from './ContactData.css'
import Spinner from '../../../components/ui/Spinner/Spinner';
import {axiosOrders} from '../../../axios-instance';
import WithErrorHandler from '../../../HOC/WithErrorHandler/WithErrorHandler'
import Input from '../../../components/ui/Input/Input';
import {purchaseBurgerStart} from '../../../store/actions'
class ContactData extends Component {
  state = {
    formIsValid: false,
    orderForm: {
      name: {
        elementLabel: 'Name',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name '
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
      email: {
        elementLabel: 'Email',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email '
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementLabel: 'Street Location',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Location Street '
        },
        value: '',
        validation: {
          required: true
        },
        touched: false
      },
      zipCode: {
        elementLabel: 'zipCode',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip code '
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      country: {
        elementLabel: 'Country',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementLabel: 'Deliver',
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest'
            }, {
              value: 'cheapest',
              displayValue: 'Slowest'
            }
          ]
        },
        value: 'fastest',
        valid: true
      }
    }
  }
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  inputChanged = (event, id) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updateElement = {
      ...updatedOrderForm[id]
    }
    updateElement.value = event.target.value;
    if (updatedOrderForm[id].validation) {
      updateElement.valid = this.checkValidity(updateElement.value, updatedOrderForm[id].validation)
    } else {
      updateElement.valid = true
    }
    updateElement.touched = true
    updatedOrderForm[id] = updateElement;
    // console.log(updateElement)
    let formIsValid = true;
    for (let input in updatedOrderForm) {
      formIsValid = updatedOrderForm[input].valid && formIsValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
  }
  orderHandler = (event) => {
    event.preventDefault();
    const formData = {}
    for (let i in this.state.orderForm) {
      formData[i] = this.state.orderForm[i].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    this
      .props
      .onPostOrder(order)
  }
  render() {
    let form = null;
    if (this.props.loading) {
      form = <Spinner/>
    } else {
      const formElementArray = []
      for (let key in this.state.orderForm) {
        formElementArray.push({id: key, config: this.state.orderForm[key]})
      }

      form = (
        <div className={css.ContactData}>
          <h4>Entrer your contact data</h4>
          <form>
            {formElementArray.map(form => {
              return <Input
                inputtype={form.config.elementType}
                config={form.config.elementConfig}
                key={form.id}
                valid={(!form.config.touched) || form.config.valid}
                shouldValidate={form.config.validation}
                changed={(e) => {
                this.inputChanged(e, form.id)
              }}
                label={form.config.elementLabel}
                value={form.config.value}/>
            })}
            <Button
              buttonType="Success"
              disabled={!this.state.formIsValid}
              clicked={this.orderHandler}>Order</Button>
          </form>
        </div>
      )
    }
    return form;
  }
}

const mapStateToProps = (state) => {
  return {ingredients: state.burger.ingredients, price: state.burger.totalPrice, loading: state.order.loading, error: state.order.error}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onPostOrder: (order) => {
      dispatch(purchaseBurgerStart(order))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(ContactData, axiosOrders))