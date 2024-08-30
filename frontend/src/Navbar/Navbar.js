import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={require('../img/Hope-logo.png')} alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <a href="/admin" className="admin-login">Admin Login</a>
      </div>
    </nav>
  );
}

export default Navbar;