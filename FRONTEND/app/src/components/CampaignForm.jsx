import React, { useState } from "react";
import axios from "axios"; // Add this import statement
import { useNavigate } from "react-router-dom";
import "./styles/main_style.css";
import showPopup from "../helpers/pop_up_notification";
import Layout from "./Layout";

const CampaignForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    accountNumber: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div className="container campaign-wrapper">
        <h1>Start a Campaign !</h1>

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
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CampaignForm;
