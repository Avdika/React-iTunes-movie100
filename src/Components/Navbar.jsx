import React from 'react';

import '../Styles/css/navbarStyle.css';

function Navbar() {
  return (
    <nav className='navBar'>
      <h2 className='title'>Top 100 Movies</h2>
      <ul className='list'>
        <li>
          <a href="/" className='navlink selected'>Home</a>
        </li>
        <li>
          <a href="/About" className='navlink'>About</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
