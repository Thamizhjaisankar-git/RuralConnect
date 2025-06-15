import React from 'react';
import './doctor-style.css';
import doctorImage from '../assets/doclanding.png';
import { useNavigate } from 'react-router-dom'; // to handle navigation
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';


const DoctorDownload = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/doctor-login'); // update this route to your actual login route
  };

  return (
    <div>
      <p className="logo">Rural Connect</p>
      <div className="containerd">
        <div className="text-sectiond">
          <h2>
            <span>Download</span> Rural Connect Doctor Desktop App
          </h2>
          <p>
            Welcome to the official download page for the RuralConnect Doctor Panel, a powerful desktop app that empowers doctors to deliver quality care remotely. Whether you're managing patient records, offering consultations or issuing prescriptions, the Doctor Panel makes it simple, secure and accessible.
          </p>
         <button className="download-btnd" onClick={() => alert("It's started downloading, wait some time and check in your download section")}>
  Download now
</button>
          <button className="login-btnd" onClick={() => navigate('/Login')}>Go to Login</button>
        </div>
        <div className="image-sectiond">
          <img src={doctorImage} alt="Doctor with computer" />
        </div>
      </div>
    </div>
  );
};

export default DoctorDownload;
