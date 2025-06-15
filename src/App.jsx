// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PatientDownload from './pages/PatientDownload';
import DoctorDownload from './pages/DoctorDownload';
import Login from './pages/Login';
import OtpVerification from './pages/OtpVerification';
import Signup from './pages/Signup';
import Profiles from './pages/Profiles';
import PatientDetails from './pages/PatientDetails';
import Settings from './pages/Settings';
import Meet from './pages/Meet';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient-download" element={<PatientDownload />} />
        <Route path="/doctor-download" element={<DoctorDownload />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OtpVerification" element={<OtpVerification />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/PatientDetails" element={<PatientDetails />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
