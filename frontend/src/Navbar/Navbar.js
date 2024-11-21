import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../context/CurrentUser';
import './Navbar.css';

function Navbar() {
  const {currentUser, updateToken} = useCurrentUser()

  const handleLogout = () => {
    updateToken(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={require('../img/Hope-logo.png')} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        {!currentUser ? <a href="/admin" className="admin-login">Admin Login</a> : <button onClick={handleLogout}>
          LOGOUT
          </button>}
      </div>
    </nav>
  );
}

export default Navbar;