import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUserCircle,
  FaUsers,
  FaVideo,
  FaCog,
  FaTh,
  FaUser,
  FaIdBadge,
  FaChevronDown,
  FaInfoCircle
} from 'react-icons/fa';
import './Profiles.css'; // Your page-specific styles
import './Dashboard.css'; // Import shared sidebar/dashboard styles

const patientProfiles = [
  { name: 'John', age: 30, gender: 'Male' },
  { name: 'June', age: 21, gender: 'Female' },
  { name: 'Elsa', age: 25, gender: 'Female' },
  { name: 'John', age: 28, gender: 'Male' },
];

const Profiles = () => {

  const [activeTab, setActiveTab] = useState('profiles');
  const [showSubItems, setShowSubItems] = useState(true); // keep sub items open
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo1">Rural Connect</h2>
        <nav>
          <ul>
            <li
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => {
                setActiveTab('dashboard');
                setShowSubItems(false);
                navigate('/Dashboard');
              }}
            >
              <FaTh /> Dashboard
            </li>
            <li
              className={activeTab === 'patients' ? 'active' : ''}
              onClick={() => {
                setActiveTab('patients');
                setShowSubItems(!showSubItems);
              }}
            >
              <FaUsers /> Patients <span className="Fa"><FaChevronDown /></span>
            </li>

            {showSubItems && (
              <ul className="sub-items">
                <li
                  className={activeTab === 'profiles' ? 'active' : ''}
                  onClick={() => {
                    setActiveTab('profiles');
                    navigate('/Profiles');
                  }}
                >
                  &nbsp;&nbsp;&nbsp; <FaUser /> Profiles
                </li>
                <li
                  className={activeTab === 'details' ? 'active' : ''}
                  onClick={() => {
                    setActiveTab('details');
                    navigate('/PatientDetails');
                  }}
                >
                  &nbsp;&nbsp;&nbsp; <FaIdBadge /> Patient_Details
                </li>
              </ul>
            )}

            <li
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => {
                setActiveTab('settings');
                setShowSubItems(false);
                navigate('/Settings');
              }}
            >
              <FaCog /> Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Profiles Section */}
      <main className="main-dashboard">
        {/* Top Header */}
        <header className="profile-header">
          <h2>Patients Details</h2>
          <FaUserCircle className="profile-icon" />
        </header>

        {/* Content Section */}
        <div className="grid">
          <div className="card">
            <div className="card-content">
              <div className="patient-header">
                <div className="patient-avatar">J</div>
                <div>
                  <h3>John</h3>
                  <p>Age: 19</p>
                  <p>Gender: Male</p>
                </div>
              </div>
              <div className="patient-contact">
                <p>📞 +91 8903649873</p>
                <p>📧 john123@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="card col-span-2">
            <div className="tab-header">
              <div className="tabs">
                <button className="tab active">Active</button>
                <button className="tab">Past</button>
              </div>
              <button className="upload-button">⬆ Upload</button>
            </div>

            <div className="card-content">
              <h4>Dr. A.Mishra</h4>
              <p className="date">30 June, 2023</p>
              <div>
                <strong>Medicines:</strong>
                <ul>
                  <li>Kidney Solution - 1 tablet - 5 days</li>
                  <li>Fastract - 1 tablet - 5 days</li>
                </ul>
              </div>
              <button className="download-button">⬇ Download PDF</button>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card link">Medical History</div>
          <div className="card link">Prescriptions</div>
          <div className="card link">Reports</div>
        </div>
      </main>
    </div>
  );
}

    
export default Profiles;
