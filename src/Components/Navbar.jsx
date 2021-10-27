import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Styles/css/navbarStyle.css';

function Navbar() {
  return (
    <nav className='navBar'>
      <h2 className='title'>Top 100 Movies</h2>
      <ul className='list'>
        <li>
          <NavLink to="/" className='navlink selected'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className='navlink'>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
