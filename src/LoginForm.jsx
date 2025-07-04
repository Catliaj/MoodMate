// LoginForm.jsx
import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <svg width="100" height="100" viewBox="0 0 120 120" className="logo-svg">
            <circle cx="60" cy="60" r="54" fill="#ffffff" />
            <rect x="30" y="40" width="60" height="4" rx="2" fill="#6366f1" opacity="0.7" />
            <rect x="30" y="52" width="60" height="4" rx="2" fill="#6366f1" opacity="0.7" />
            <rect x="30" y="64" width="40" height="4" rx="2" fill="#6366f1" opacity="0.7" />
            <circle cx="35" cy="85" r="6" fill="#4ade80" />
            <circle cx="60" cy="85" r="6" fill="#facc15" />
            <circle cx="85" cy="85" r="6" fill="#f87171" />
            <path d="M30,30 Q45,10 60,30 T90,30" stroke="#6366f1" strokeWidth="3" fill="none" />
          </svg>
          <div>
            <h1 className="logo-title">MoodMate</h1>
            <p className="logo-subtitle">A Personal Mood Tracker & Journal</p>
          </div>
        </div>

        <div className="login-form">
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required placeholder="Enter your username" />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
              <div className="password-container">
                <input type={showPassword ? 'text' : 'password'} id="password" required placeholder="Enter your password" />
                <div className="toggle-password" onClick={togglePassword}>
                  {showPassword ? '🙈' : '👁️'}
                </div>
              </div>
            </div>

            <div className="form-check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="btn-login">Log In</button>
          </form>

          <div className="signup-footer">
            <p>
              Don't have an account? <a href="#" className="signup-link">Sign up</a>
            </p>
          </div>
        </div>
      </div>

      <div className="circle indigo"></div>
      <div className="circle purple"></div>
    </div>
  );
}

export default LoginForm;
