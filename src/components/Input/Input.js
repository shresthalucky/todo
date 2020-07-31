import React from 'react';

function Input({ name, changeHandler, value, className, placeholder, label, inputTag }) {

  let inputElement;

  switch (inputTag) {
    case 'input':
      inputElement =
        placeholder ?
          <input
            name={name}
            type="text"
            onChange={changeHandler} value={value}
            placeholder={placeholder} />
          :
          <input name={name}
            type="text"
            onChange={changeHandler}
            value={value} />
      break;

    case 'textarea':
      inputElement = <textarea
        name={name}
        onChange={changeHandler} value={value} />
      break;

    default:
  }

  return (
    <div className={`input ${className}`}>
      {label && <label>{label}</label>}
      {inputElement}
    </div>
  )
}

export default Input;