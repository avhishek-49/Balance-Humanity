import { useState } from 'react';
import './App.css';

function App() {


    // State to store form values
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      password: '',
      customerPin: '',
    });


    // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', formData);
    // Add your logic to send data to the server, etc.
  };
  

  return (
    <>
      <section className="nav">
        
    
          <a className="homeNavBar" href="#tab-svelte">
            Home
          </a>
          <a className="profileNavBar" href="#tab-esbuild">
            contact us
          </a>

          <a className="locationNavBar" href="#tab-esbuild">
           location
          </a>
        
        
          <span className="nav-tab-slider"></span>

      </section>

        {/* Signup form */}
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="customerPin">Customer Pin</label>
            <input
              type="text"
              id="customerPin"
              name="customerPin"
              value={formData.customerPin}
              onChange={handleChange}
              required
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
  



     

      <canvas className="background"></canvas>
    </>
  );
}

export default App;
