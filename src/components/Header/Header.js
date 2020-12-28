import React from 'react';

import Navbar from '../Navbar/Navbar';

function Header(props) {
  return (
    <header className="header">
      <div className="page-heading">Todo List</div>
      <Navbar items={props.navs} />
    </header>
  );
}

export default Header;

