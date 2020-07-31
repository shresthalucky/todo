import React from 'react';

function Input({ name, changeHandler, value, className, placeholder, inputTag }) {

  let inputElement;

  switch (inputTag) {
    case 'input':
      inputElement =
        <input
          name={name}
          type="text"
          onChange={changeHandler} value={value}
          placeholder={placeholder}
        />
      break;

    case 'textarea':
      inputElement =
        <textarea
          name={name}
          onChange={changeHandler} value={value}
          placeholder={placeholder}
        />
      break;

    default:
  }

  return (
    <div className={`input ${className}`}>
      {inputElement}
    </div>
  )
}

export default Input;