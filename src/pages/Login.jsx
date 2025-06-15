import React, { useState } from 'react';
import './Login.css'; // Extracted CSS to keep JSX clean
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };

  return (
    <div className="login-container">
      <h2 className="head">Doctor Panel</h2>
      <div className="login-card">
        {/* Left Section */}
        <div className="left-section">
          <h3>Welcome Back!</h3>
          <p>
            Log in and resume your journey
            <br />
            of impact with RuralConnect.
          </p>
          <button className="signup-btn" onClick={() => navigate('/Signup')}>Sign up</button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h3>Sign in</h3>

          <div className="input-group">
            <FaEnvelope />
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
            />
            {passwordVisible ? (
              <FaEyeSlash id="togglePassword" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye id="togglePassword" onClick={togglePasswordVisibility} />
            )}
          </div>

          <div className="forgot-pass">
            <a href="#">Forgot password?</a>
          </div>

          <button className="login-btn" onClick={() => navigate('/OtpVerification')}>Send OTP</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
