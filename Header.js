import React from 'react';
import logo from './logo4.jpg'; // Adjust path based on actual location

function Header() {
  return (
    <div className="header">
      <div className="logo-title">
        <img src={logo} alt="Eye Logo" />
        <h1>Vision for All</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="auth-buttons">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;
