import React from 'react';

import Nav from '../Nav/Nav';

function Navbar(props) {
  
  return(
    <nav>
      <ul>
        {props.status.map((status, i) => {
          return <Nav title={status} key={i} />
        })}
      </ul>
    </nav>
  )

}

export default Navbar;