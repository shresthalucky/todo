import React from 'react';

function Button({ clickHandler, type, ...rest }) {

  return (
    <button className={`btn btn-${type}`} onClick={clickHandler}>{rest.children}</button>
  )
}

export default Button;