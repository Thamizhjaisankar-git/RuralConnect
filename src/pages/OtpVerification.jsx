import React, { useState, useEffect } from 'react';
import './OtpVerification.css';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [loading, setLoading] = useState(false); // ⬅️ New loading state

  // Timer for resend OTP button
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleVerify = () => {
    setLoading(true);
    setMessage('');
    setTimeout(() => {
      setLoading(false);
      if (otp === '3570') {
        navigate('/Dashboard');
      } else {
        setMessage('❌ Incorrect OTP. Please try again.');
      }
    }, 1500); // ⏳ 1.5-second simulated delay
  };

  const handleResend = () => {
    setMessage('✅ OTP sent! Please check your email.');
    setResendTimer(60);
  };

  return (
    <div className="otp-container">
      <h2 className="otp-title">Doctor Panel</h2>
      <div className="otp-box">
        {/* Left Section */}
        <div className="otp-left">
          <h3>Welcome Back!</h3>
          <p>
            Log in and resume your journey of impact with <strong>RuralConnect</strong>.
          </p>
          <button className="signino-btn" onClick={() => navigate('/Login')}>Sign In</button>
        </div>

        {/* Right Section */}
        <div className="otp-right">
          <h4>Enter the OTP sent to your email</h4>
          <input
            className="otp-input"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            disabled={loading}
          />

          <div className="otp-buttons">
            <button className="verify-btn" onClick={handleVerify} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
            <button
              className="resend-btn"
              onClick={handleResend}
              disabled={resendTimer > 0 || loading}
            >
              {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend OTP'}
            </button>
          </div>

          {/* Message display */}
          {message && <p className="otp-message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
