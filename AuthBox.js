import React from 'react';

function AuthBox() {
  return (
    <div className="auth-box">
      <h2>Login / Sign Up</h2>
      <input type="text" placeholder="Email or Username" />
      <input type="password" placeholder="Password" />
      <button>Continue</button>
    </div>
  );
}

export default AuthBox;
