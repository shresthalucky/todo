import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ title, path }) {
  return (
    <li className="nav-link">
      <NavLink to={path}>{title}</NavLink>
    </li>
  )
}

export default Nav;