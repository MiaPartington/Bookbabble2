import {useState} from 'react';
import './Navbar.css';


const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className="navbar">
      <h1>Bookbabble</h1>
      <div className="links">
        <a href="/" exact>Home</a>
        <a href="/About">About</a>
        <a href="/Blog">Blog</a>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <a href="/Marketplace">Marketplace</a>
          {dropdownVisible && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h3>Categories</h3>
                <a href="/Sales">New</a>
                <a href="/Romance">Romance</a>
                <a href="/Action">Action</a>
                <a href="/Education">Education</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;