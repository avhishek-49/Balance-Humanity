import React, { useState, useRef, useEffect } from 'react';
import './otp.css';
import { useNavigate } from 'react-router-dom';

const OtpCustomer = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [secondsLeft, setSecondsLeft] = useState(60); // Change as needed
  const inputsRef = useRef([]);
  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [secondsLeft]);

  const handleChange = (index, value) => {
    if (!isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5 && value !== '') {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join('');
    console.log('Submitting OTP:', enteredOtp);
    setOtp(['', '', '', '', '', '']);
    inputsRef.current[0].focus();
    navigate('/home'); // Navigate to the home route after submitting OTP
  };

  return (
    <div className="otp-container">
      <div className="otp-popup">
        <h2>Enter OTP</h2>
        <div className="otp-input-container">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(input) => (inputsRef.current[index] = input)}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <button onClick={handleSubmit}>Submit OTP</button>
        <div className="message">
          <p>OTP will expire in {secondsLeft} seconds.</p>
          <p>Balance humanity</p>
        </div>
      </div>
    </div>
  );
};

export default OtpCustomer;
