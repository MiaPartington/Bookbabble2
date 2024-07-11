// import {useState} from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  // const [dropdownVisible, setDropdownVisible] = useState(false);

  const location = useLocation();

  const isMarketplaceActive = location.pathname.includes('/Marketplace') || 
                               location.pathname.includes('/Sales') || 
                               location.pathname.includes('/Romance') || 
                               location.pathname.includes('/Action') || 
                               location.pathname.includes('/Education');

  const isBlogActive = location.pathname.includes('/Jaws') ||
                        location.pathname.includes('/Book1984') || 
                        location.pathname.includes('/Blog') || 
                        location.pathname.includes('/Road');                          

  return (
    <nav className="navbar">
      <h1>Bookbabble</h1>
      <ul id="navigation" className="links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Blog" className={isBlogActive ? 'active-link' : ''}>
            Blog
          </NavLink>
        </li>
        <NavLink to="/Marketplace" className={isMarketplaceActive ? 'active-link' : ''}>
            Marketplace
          </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;