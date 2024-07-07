import {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
<nav className="navbar">
      <h1>Bookbabble</h1>
      <ul id="navigation" className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <Link to="/Marketplace">Marketplace</Link>
          {dropdownVisible && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h3>Categories</h3>
                <Link to="/Sales">New</Link>
                <Link to="/Romance">Romance</Link>
                <Link to="/Action">Action</Link>
                <Link to="/Education">Education</Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
 
export default Navbar;
