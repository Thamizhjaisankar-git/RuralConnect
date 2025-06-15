import React, { useState } from 'react';
import './Dashboard.css';
import {
  FaUserCircle,
  FaUsers,
  FaVideo,
  FaCog,
  FaTh,
  FaUser,
  FaIdBadge,
  FaChevronDown
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showSubItems, setShowSubItems] = useState(false); // controls submenu visibility

  const todayConsults = [
    { name: 'John', time: '10:00 AM', type: 'Follow up consulting' },
    { name: 'June', time: '11:00 AM', type: 'Follow up consulting' },
    { name: 'Glory', time: '12:00 PM', type: 'Follow up consulting' },
    { name: 'Rang', time: '1:00 PM', type: 'Follow up consulting' },
  ];

  const upcomingConsults = [
    { name: 'Aalim', date: '06/13/2025', age: 30, gender: 'Male' },
    { name: 'Chen', date: '07/17/2025', age: 42, gender: 'Male' },
    { name: 'Elsa', date: '07/17/2025', age: 21, gender: 'Female' },
    { name: 'Kalix', date: '08/15/2025', age: 28, gender: 'Male' },
    { name: 'Wang peng', date: '09/15/2025', age: 23, gender: 'Female' },
    { name: 'Rang', date: '09/17/2025', age: 24, gender: 'Male' },
  ];

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
                setShowSubItems(!showSubItems); // toggle submenu
              }}
            >
              <FaUsers /> Patients <span className="Fa"><FaChevronDown /></span>
            </li>

            {/* Show sub-items only if 'Patients' is clicked */}
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

      {/* Main Dashboard */}
      <main className="main-dashboard">
        <header className="dashboard-header">
          <h3>Dashboard</h3>
          <FaUserCircle className="profile-icon" />
        </header>

        {/* Today's Consultings */}
        <section className='body-section'>
          <h4>Today's Consultings</h4>
          <div className="consults-grid">
            {todayConsults.map((consult, index) => (
              <div key={index} className="consult-card">
                <h5>{consult.name}</h5>
                <p>{consult.type}</p>
                <p>{consult.time}</p>
                <button className="join-btn" onClick={() => navigate('/Meet')}>
                  <FaVideo /> Join call
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Consultings */}
        <section className='body-section'>
          <h4>Upcoming Consultings</h4>
          <div className="consults-grid">
            {upcomingConsults.map((consult, index) => (
              <div key={index} className="consult-card upcoming">
                <h5>{consult.name}</h5>
                <p>{consult.date}</p>
                <p>Age: {consult.age}</p>
                <p>Gender: {consult.gender}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
