import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store'
const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.value)
    const increamentHandler = () => {
        dispatch(counterActions.increment())
    }
    const decreamentHandler = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div className='Counter'>
            <h3>{counter}</h3>
            <div className="btn-div">
                <button onClick={decreamentHandler}>-</button>
                <button onClick={increamentHandler}>+</button>
            </div>
        </div>
    )
}

export default Counter