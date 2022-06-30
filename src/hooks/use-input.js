import { useState } from 'react'

const useInput = (validateValue) => {
    const [value, setValue] = useState('')
    const [enteredValueTouch, setEnteredValueTouch] = useState(false)
    const ValueIsValid = validateValue(value)
    const hasError = !ValueIsValid && enteredValueTouch
    const valueChangeHandler = (e) => {
        setValue(e.target.value)
        setEnteredValueTouch(true)
    }
    const valueBlurHandler = () => {
        setEnteredValueTouch(true)
    }
    const reset = () => {
        setValue("")
        setEnteredValueTouch(false)
    }
    return {
        value,
        ValueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useInput