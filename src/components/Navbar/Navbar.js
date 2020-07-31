import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          {Object.keys(props.items).map((nav) => {
            return (
              <li className="nav-link" key={nav}>
                <NavLink exact to={props.items[nav].path}>{nav}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;