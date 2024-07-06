import {useState} from 'react';
import './Navbar.css';


const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className="navbar">
      <h1>Bookbabble</h1>
      <div className="links">
        <a href="/Bookbabble/" exact>Home</a>
        <a href="/Bookbabble/About">About</a>
        <a href="/Bookbabble/Blog">Blog</a>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <a href="/Bookbabble/Marketplace">Marketplace</a>
          {dropdownVisible && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h3>Categories</h3>
                <a href="/Bookbabble/Sales">New</a>
                <a href="/Bookbabble/Romance">Romance</a>
                <a href="/Bookbabble/Action">Action</a>
                <a href="/Bookbabble/Education">Education</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;
