import React from 'react';

import Nav from '../Nav/Nav';

function Navbar(props) {

  return (
    <nav>
      <ul>
        {Object.keys(props.items).map((nav) => {
          return <Nav title={nav} path={props.items[nav].path} key={nav} />
        })}
      </ul>
    </nav>
  )

}

export default Navbar;