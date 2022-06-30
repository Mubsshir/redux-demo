import React from 'react'
import Input from './UI/Input'
import useInput from '../hooks/use-input'
import { authActions } from '../store'
import { useDispatch } from 'react-redux/es/exports'
const Login = () => {
    const dispatch = useDispatch()
    const {
        value: enteredName,
        ValueIsValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(value => value.trim() !== "")
    const {
        value: enteredPassword,
        ValueIsValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passChangeHandler,
        valueBlurHandler: passBlurHandler,
        reset: resetPass

    } = useInput(value => value.trim().length >= 6)

    const formIsValid = nameIsValid && passwordIsValid
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (formIsValid) {
            dispatch(authActions.isValid({
                username: enteredName,
                password: enteredPassword
            }))
            resetName()
            resetPass()
        }
    }
    const nameClass = nameHasError ? 'form-control invalid' : 'form-control'
    const passwordClass = passwordHasError ? 'form-control invalid' : 'form-control'

    return (
        <form action="" className='auth-form' onSubmit={onSubmitHandler}>
            <h3>Login</h3>
            <Input
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                className={nameClass}
                attr={{
                    type: 'text',
                    placeholder: 'User name',
                    id: 'uName',
                    value: enteredName
                }
                }
            />
            <Input
                className={passwordClass}
                onChange={passChangeHandler}
                onBlur={passBlurHandler}
                attr={{
                    type: 'password',
                    placeholder: 'Password',
                    id: 'pass',
                    value: enteredPassword
                }}

            />
            <button type="submit" disabled={!formIsValid}>Login</button>
        </form>

    )
}
export default Login