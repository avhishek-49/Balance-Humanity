import React, { useState } from "react";
import axios from "axios"; // Add this import statement
import { useNavigate } from "react-router-dom";
import "./styles/main_style.css";
import "../onboarding/styles/sign_up.css";
import showPopup from "../helpers/pop_up_notification";
import Layout from "./Layout";

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    accNumber: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePostCampaign = async () => {
    console.log("Post campaign");
  };

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <h1>Start a Campaign !</h1>
        <div className="section-form">
          <form id="form">
            <div className="">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="accNumber">Acoount Number</label>
              <input
                type="text"
                name="accNumber"
                value={formData.accNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="accNumber">Upload Image</label>
              <input
                type="file"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="button" id="btn" onClick={handlePostCampaign}>
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignForm;
