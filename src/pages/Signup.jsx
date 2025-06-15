import React, { useState } from 'react';
import './Signup.css';
import { FaUser, FaEnvelope, FaLock, FaEye } from 'react-icons/fa';
import docImage from '../assets/doc.jpg'; // Update the path as per your folder
import { useNavigate } from 'react-router-dom';

const Signup = () => {
   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  return (
    <div className="containers">
      <h2 className="title">Doctor Panel</h2>
      <div className="signup-box">
        <div className="left-image">
          <img src={docImage} alt="Doctor Tech" />
        </div>
        <div className="signup-form">
          <h3>Create Account</h3>
          <form>
            <div className="input-group">
              <FaUser />
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-group">
              <FaEnvelope />
              <input type="email" placeholder="Email ID" required />
            </div>
            <div className="input-group">
              <FaLock />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
              />
              <FaEye
                id="togglePassword"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="input-group">
              <FaLock />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                required
              />
              <FaEye
                id="togglePassword"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <button type="submit" className="signup1-btn" onClick={() => navigate('/Login')}>
              Sign up
            </button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
