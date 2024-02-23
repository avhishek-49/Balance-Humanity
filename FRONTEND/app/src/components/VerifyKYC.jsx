import React, { useState } from "react";
import axios from "axios"; // Add this import statement
import "./styles/main_style.css";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";

const VerifyKyc = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    accNumber: "",
    description: "",
    citizenshipID: "",
    district: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVerifyKyc = async () => {
    console.log("Verified");
  };

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <h1>Please verify your details!</h1>
        <div className="section-form">
          <form id="form">
            <div className="">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="accNumber">Account Number</label>
              <input
                type="text"
                name="accNumber"
                value={formData.accNumber}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="description">Bio/Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="citizenshipID">Citizenship ID</label>
              <input
                type="text"
                name="citizenshipID"
                value={formData.citizenshipID}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="district">District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="button" id="btn" onClick={handleVerifyKyc}>
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyKyc;
