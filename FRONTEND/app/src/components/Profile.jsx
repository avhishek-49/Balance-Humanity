import React, { useState } from "react";
import axios from "axios"; // Add this import statement
import "./styles/main_style.css";
import Layout from "./Layout";

const campaignData = [
  {
    id: 1,
    title: "Test Campaign 1",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
    amount: "100000",
  },
  {
    id: 2,
    title: "Test Campaign 2",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
    amount: "50000",
  },
];

const Profile = () => {
  const profile = {
    fullname: "John Doe",
    description: "This is bio",
    accNumber: 123567890,
    district: "Lalitpur",
  };
  return (
    <Layout>
      <div className="container main-section-wrapper">
        <img
          src="/images/user.png"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div className="profile-style">
          <p>Name: {profile.fullname}</p>
          <p>Description: {profile.description}</p>
          <p>Account No: {profile.accNumber}</p>
          <p>Address: {profile.district}</p>
        </div>
        {campaignData?.length > 0 && (
          <div className="container profile-campaigns">
            <h2>My Campaigns</h2>
            {campaignData?.map((item) => {
              return (
                <div class="custom-card card mb-3">
                  <img class="card-img" src={item.image} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <p class="card-text">
                      <b>Fund Raised: </b>Rs.{item.amount} /-
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
