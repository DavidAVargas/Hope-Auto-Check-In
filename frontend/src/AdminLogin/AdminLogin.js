import React from 'react';
import './AdminLogin.css';

function AdminLogin() {
  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;