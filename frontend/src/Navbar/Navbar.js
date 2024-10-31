import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={require('../img/Hope-logo.png')} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <a href="/admin" className="admin-login">Admin Login</a>
      </div>
    </nav>
  );
}

export default Navbar;