import { NavLink } from 'react-router-dom';

import '../Styles/css/navbarStyle.css';

function Navbar() {
  return (
    <nav className='navBar'>
      <h2 className='title'>Top 100 Movies</h2>
      <ul className='list'>
        <li>
          <NavLink exact to="/" className='navlink' activeClassName='selected'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className='navlink' activeClassName='selected'>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
