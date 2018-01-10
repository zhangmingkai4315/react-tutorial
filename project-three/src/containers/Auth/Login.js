import React, {Component} from 'react'
import css from './Login.css'
import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'

class Login extends Component {
    state = {
        loginForm: {
            email: {
                elementLabel: 'Email',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email Address '
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            password: {
                elementLabel: 'Password',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password '
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }
    loginHandler = (event) => {
        event.preventDefault();
        console.log(this.props)
        const formData = {}
        for (let i in this.state.loginForm) {
            formData[i] = this.state.loginForm[i].value;
        }
        console.log(formData)
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
        const updatedloginForm = {
            ...this.state.loginForm
        }
        const updateElement = {
            ...updatedloginForm[id]
        }
        updateElement.value = event.target.value;
        if (updatedloginForm[id].validation) {
            updateElement.valid = this.checkValidity(updateElement.value, updatedloginForm[id].validation)
        } else {
            updateElement.valid = true
        }
        updateElement.touched = true
        updatedloginForm[id] = updateElement;
        let formIsValid = true;
        for (let input in updatedloginForm) {
            formIsValid = updatedloginForm[input].valid && formIsValid;
        }
        this.setState({loginForm: updatedloginForm, formIsValid: formIsValid})
    }
    render() {
        const formElementArray = []
        for (let key in this.state.loginForm) {
            formElementArray.push({id: key, config: this.state.loginForm[key]})
        }
        return (
            <div className={css.LoginContainer}>
                <form>
                    {formElementArray.map(form => {
                        return <Input
                            inputtype={form.config.elementType}
                            type={form.config.elementConfig.type}
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
                        clicked={this.loginHandler}>
                        Login
                    </Button>

                </form>
            </div>
        )
    }
}

export default Login;