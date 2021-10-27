import React from 'react';

import { Nav, Ul, A } from '../Styles/NavbarStyle';

function Navbar({ icon, title, location }) {
  return (
    <Nav>
      <h2><i className={icon}></i> {title}</h2>
      <Ul>
        <li>
          <A exact to="/" activeClassName="selected">Home</A>
        </li>
        <li>
          <A to="/About" activeClassName="selected">About</A>
        </li>
      </Ul>
    </Nav>
  )
}

export default Navbar;
