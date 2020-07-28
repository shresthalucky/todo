import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <li>
      <Link to={'/' + props.title}>
        {props.title}
      </Link>
    </li>
  )
}

export default Nav;