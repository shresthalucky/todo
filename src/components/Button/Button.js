import React from 'react';

function Button({ clickHandler, type, group, ...rest }) {

  const btnElement = type ? <button type={type} className={`btn btn-${group}`} onClick={clickHandler}>{rest.children}</button>
    : <button className={`btn btn-${group}`} onClick={clickHandler}>{rest.children}</button>

  return btnElement;
}

export default Button;