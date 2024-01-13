import React, { useState } from 'react';
import axios from 'axios'; // Add this import statement
import './sign_up.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import showPopup from '../helpers/pop_up_notification';

const SignUpApplication = () => {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate('/');
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    customerPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      console.log('Attempting to register:', formData); // Add this line
      const response = await axios.post(
        'http://localhost:4900/api/v1/customer/register',
        formData
      );
  
      console.log('Response from server:', response); // Add this line
  
      if (response && response.status === 400) {
        // Display bad request error message
        showPopup(`${response.data.message}`, 'red');
      }
  
      if (response && response.status === 200) {
        // Display success message
        showPopup('Success', 'green');
      }
    } catch (error) {
      console.error('Error during registration:', error); // Add this line
      // Display error message
      showPopup('Balance humanity registration failed', 'red');
    }
  };


return (
  <div className="container">
    <div className="content">
      <div className="logo">Balance Humanity</div>

      <svg viewBox="0 0 395.52 247.2" height="140.2" width="200.52">
        {/* Your SVG content here */}
      </svg>

      <div className="image"></div>

      <div className="text">Start for free & get regret<br /></div>
    </div>

    <form id="form">
      <div className="title">Register</div>

      <div className="">
        <label htmlFor="firstName">First Name</label>
        <i className="far fa-envelope"></i>
        <FaUser size={20} className='userIconClass'></FaUser>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div className="">
  <label htmlFor="lastName">Last Name</label>
  <i className="far fa-envelope"></i>
  <FaUser size={20} className='userIconClass'></FaUser>
  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
</div>


<div className="">
  <label htmlFor="email">email</label>
  <i className="far fa-envelope"></i>
  <FaUser size={20} className='userIconClass'></FaUser>
  <input type="text" name="email" value={formData.email} onChange={handleChange} />
</div>


<div className="">
  <label htmlFor="mobileNumber">Mobile Number</label>
  <i className="far fa-envelope"></i>
  <FaUser size={20} className='userIconClass'></FaUser>
  <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
</div>

<div className="">
  <label htmlFor="password">Password</label>
  <i className="far fa-envelope"></i>
  <FaUser size={20} className='userIconClass'></FaUser>
  <input type="password" name="password" value={formData.password} onChange={handleChange} />
</div>


<div className="">
  <label htmlFor="customerPin">Customer Pin</label>
  <i className="far fa-envelope"></i>
  <FaUser size={20} className='userIconClass'></FaUser>
  <input type="password" name="customerPin" value={formData.customerPin} onChange={handleChange} />
</div>



      <button type="button" onClick={handleRegister} id="btn">
        Submit
      </button>
      <button type="button" onClick={navigateToHome}>
        Already Have Account
      </button>
    </form>
  </div>
);

  
};

export default SignUpApplication;
