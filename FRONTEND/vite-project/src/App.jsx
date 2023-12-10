// src/components/RegisterForm.jsx
import React from 'react';
import './App.css'; // You'll need to create this CSS file
import {FaUser} from "react-icons/fa"

const App = () => {
  return (


    <div className="container">
      <div className="content">
        <div className="logo"> Balance Humaity
        </div>

        <div className="image"></div>

        <div className="text">
          Start for free & get regret<br />
        </div>
      </div>

      <form id="form">

        <div className="title">Login</div>

        {/* User Name input */}
        <div>
          <label htmlFor="username">User Name</label>
          {/* <i className="fas fa-user"></i>
           */}
                     <FaUser size={20} className='userIconClass'></FaUser>


          <input type="text" name="username" id="username" placeholder="Abishek Paudel" />

          <i className="fas fa-exclamation-circle failure-icon"></i>
          <i className="far fa-check-circle success-icon"></i>

          <div className="error"></div>
        </div>

        {/* Email input */}
        {/* <div>
          <label htmlFor="email">Email</label>
          <i className="far fa-envelope"></i>

          <input type="email" name="email" id="email" placeholder="abishek@yopmail.com" />

          <i className="fas fa-exclamation-circle failure-icon"></i>
          <i className="far fa-check-circle success-icon"></i>

          <div className="error"></div>
        </div> */}

        {/* Password input */}
        <div>
          <label htmlFor="password">Password</label>
          <i className="fas fa-lock"></i>

          <input type="password" name="password" id="password" placeholder="Password here" />

          <i className="fas fa-exclamation-circle failure-icon"></i>
          <i className="far fa-check-circle success-icon"></i>

          <div className="error"></div>
        </div>

        <button id="btn" type="submit">
          Submit
        </button>


        <button > Sign Up</button>
      </form>
    </div>
  );
};

export default App;
