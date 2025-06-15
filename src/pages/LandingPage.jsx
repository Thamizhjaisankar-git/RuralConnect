import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import backgroundImage from '../assets/land.jpg';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="logo">Rural Connect</p>
      <div className="content">
        <h2 className="welcome-text">Welcome to Rural Connect</h2>
        <div className="button-group">
          <button onClick={() => navigate('/patient-download')}>
            Are u a patient?
          </button>
          <button onClick={() => navigate('/doctor-download')}>
            Are u a Doctor?
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
