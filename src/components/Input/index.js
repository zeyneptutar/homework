import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
      <input
        className="form-control"
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        defaultValue={props.defaultValue}
        required={props.required}
        onChange={props.onChange}/>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.defaultValue,
    required: PropTypes.bool,
    onChange: PropTypes.func
}

export default Input;