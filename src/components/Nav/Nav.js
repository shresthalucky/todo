import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ title, path }) {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  )
}

export default Nav;