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
          <h2>Patients Profiles</h2>
          <FaUserCircle className="profile-icon" />
        </header>

        {/* Content Section */}
        <section className="profiles-body">
          <h3>Patients List</h3>
          <div className="profiles-grid">
            {patientProfiles.map((patient, index) => (
              <div key={index} className="patient-card">
                <h4>{patient.name}</h4>
                <p className='para'>Age: {patient.age}</p>
                <p className='para2'>Gender: {patient.gender}</p>
                <button className="see-more-btn" onClick={() => navigate('/PatientDetails')}>
  See More <FaInfoCircle />
</button>

              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profiles;
