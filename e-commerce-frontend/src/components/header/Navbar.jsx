import React from 'react';

const Navbar = () => (
  <div className="navigation clearfix">
    <div className="nav-list-container clearfix">
      <ul className="navigation-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="#">Women +</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">Blouses & shirts</a>
            </li>
            <li>
              <a href="#">Trousers & shorts</a>
            </li>
            <li>
              <a href="#">Dresses</a>
            </li>
            <li>
              <a href="#">Blazers & jackets</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Men +</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact & Info</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
      </ul>
    </div>
    <div className="navigation-form-container">
      <form className="navigation-form">
        <input type="submit" name="search-button" value=" " />
        <input type="text" name="search" placeholder="search here" />
      </form>
    </div>
  </div>
);

export default Navbar;
