import React, { useState } from "react";
import axios from "axios"; // Add this import statement
import "./styles/main_style.css";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";

const DonateForm = () => {
  const [formData, setFormData] = useState({
    recAccNumber: "",
    sendAccNumber: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDonate = async () => {
    console.log("Donate now");
  };

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <h1>
          Help us to implment this program. <br /> Make a Donation!
        </h1>
        <div className="section-form">
          <form id="form">
            <div className="">
              <label htmlFor="sendAccNumber">Sender's Account Number</label>
              <input
                type="text"
                name="sendAccNumber"
                value={formData.sendAccNumber}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="recAccNumber">Receipent Account Number</label>
              <input
                type="text"
                name="recAccNumber"
                value={formData.recAccNumber}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="button" id="btn" onClick={handleDonate}>
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DonateForm;
