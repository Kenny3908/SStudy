// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar" data-navbar>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/smartstudy" className="navbar-link" data-nav-toggler>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link" data-nav-toggler>
           About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/free textbooks" className="navbar-link" data-nav-toggler>
          Free Textbooks
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/quiz Games" className="navbar-link" data-nav-toggler>
          Quiz Games
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/textbook" className="navbar-link" data-nav-toggler>
            Textbook
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact us" className="navbar-link" data-nav-toggler>
          Contact Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link" data-nav-toggler>
          Login
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/register" className="navbar-link" data-nav-toggler>
          Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
