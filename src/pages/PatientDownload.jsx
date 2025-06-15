import React from 'react';
import './PatientDownload.css';
import image from '../assets/image.png'; // adjust path based on structure

const PatientDownload = () => {
  return (
    <div className="patient-download-body">
      <div className="header">
        Rural Connect
      </div>
      <div className="container">
        <div className="image-section">
          <img src={image} alt="Mobile App Mockups" />
        </div>
        <div className="text-section">
          <h2>
            Download <strong>Rural Connect Patient Mobile App</strong>
          </h2>
          <p>
            Start consulting patients remotely with ease. Install the Doctor Panel on your laptop for full access to video calls, patient records and multilingual support. One click to install a lifetime of impact.
          </p>
         <button className="download-btn" onClick={() => alert("It's started downloading, wait some time and check in your download section")}>
  Download now
</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDownload;
