import React from 'react';

import Button from '../../components/Button/Button';

function Bottom(props) {

  return(
    <div className="bottom-layout">
      <div className="container">
        <Button clickHandler={props.displayFormHandler} group="primary">Add New Todo</Button>
      </div>
    </div>
  )
}

export default Bottom;