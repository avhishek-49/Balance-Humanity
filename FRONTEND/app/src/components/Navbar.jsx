import React, { useState, useRef, useEffect } from "react";
import "./styles/navbar.css";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light custom-navbar-bg">
        <a class="navbar-brand" href="/home">
          BH
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">
                My Profile
              </a>
            </li>
            <li class="nav-item">
              <button class="btn custom-btn-campaign" type="submit">
                Start Campaign
              </button>
            </li>
          </ul>
          <div>
            <button class="btn btn-danger" type="submit">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
