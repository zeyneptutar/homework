import React from 'react';

const Input = (props) => {
  return (
      <input
        className="form-control"
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        required={props.required}
        onChange={props.onChange}/>
    )
}

export default Input;