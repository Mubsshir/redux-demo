import React from 'react'

const Input = (props) => {
    return (
        <div className='form-input'>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                {...props.attr}
                onChange={props.onChange}
                onBlur={props.onBlur}
                autoComplete="on"
                className={props.className}
            />
        </div>
    )
}

export default Input