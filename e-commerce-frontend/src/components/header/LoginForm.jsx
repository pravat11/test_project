import React from 'react';

const LoginForm = () => (
  <div className="login-form">
    <form>
      <span>Log-in:</span>
      <input className="email" type="email" name="email" placeholder="E-mail address" />
      <div className="password-container">
        <input className="password" type="password" name="password" placeholder="Password" />
        <a href="#">Forget?</a>
      </div>
      <button className="form-button">Log-in</button>
      <button className="form-button">Continue as guest</button>
    </form>
  </div>
);

export default LoginForm;
