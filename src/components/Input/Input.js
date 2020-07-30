import React from 'react';

function Input({ changeHandler, value, className, placeholder }) {

  return (
    <input type="text" className={`input ${className}`}
      onChange={changeHandler} value={value}
      placeholder={placeholder || ''} />
  )
}

export default Input;