import React, {Component} from 'react'
import css from './Login.css'
import {connect} from 'react-redux'
import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'
import {loginSubmit, signupSubmit} from '../../store/actions'
import Spinner from '../../components/ui/Spinner/Spinner'
class Login extends Component {
    state = {
        formIsValid: true,
        isSignup: false,
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
            },
            password_2: {
                elementLabel: 'ConfirmPasswd',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Confirm Password '
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    sameAs: 'password'
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
        this
            .props
            .onLoginHandler(formData)
    }
    signupSubmit = (event) => {
        event.preventDefault();
        const formData = {}
        for (let i in this.state.loginForm) {
            if (i === 'password_2') {
                continue
            }
            formData[i] = this.state.loginForm[i].value;
        }
        this
            .props
            .onSignupHandler(formData)
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
        if (rules.sameAs) {
            console.log(value)
            console.log(this.state.loginForm)
            isValid = (value === this.state.loginForm[rules.sameAs].value)
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
            if (input === 'password_2' && !this.state.isSignup) {
                updatedloginForm[input].valid = true
            }
            formIsValid = updatedloginForm[input].valid && formIsValid;
        }
        this.setState({loginForm: updatedloginForm, formIsValid: formIsValid})
    }
    swithcAuthModeHandler = (event) => {
        event.preventDefault()
        this.setState({
            isSignup: !this.state.isSignup
        })
    }
    render() {
        const formElementArray = []
        for (let key in this.state.loginForm) {
            formElementArray.push({id: key, config: this.state.loginForm[key]})
        }
        const form = (
            <form>
                {formElementArray.map(form => {
                    if (!this.state.isSignup && form.id === 'password_2') {
                        return null;
                    }
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
                    clicked={this.state.isSignup
                    ? this.signupSubmit
                    : this.loginHandler}>
                    {this.state.isSignup
                        ? 'Signup'
                        : 'Login'}
                </Button>
                <button className={css.LoginSwitch} onClick={this.swithcAuthModeHandler}>
                    {this.state.isSignup
                        ? 'Goto Login'
                        : 'Goto Signup'}
                </button>
            </form>
        )
        return (
            <div className={css.LoginContainer}>{this.props.loading
                    ? <Spinner/>
                    : form}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.auth.user, loading: state.auth.loading, error: state.auth.error}
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLoginHandler: (user) => dispatch(loginSubmit(user)),
        onSignupHandler: (user) => dispatch(signupSubmit(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);