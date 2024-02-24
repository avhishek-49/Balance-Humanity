import React, { useState, useRef, useEffect } from "react";
import "./styles/navbar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light custom-navbar-bg">
        <a className="navbar-brand" href="/home">
          BH
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                My Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/start-campaign">
                <button className="btn custom-btn-campaign" type="submit">
                  Start Campaign
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/verify-kyc">
                <button className="btn custom-btn-campaign" type="submit">
                  Verify KYC
                </button>
              </a>
            </li>
          </ul>
          <div>
            <button className="btn btn-danger" onClick={() => navigate('/')}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
