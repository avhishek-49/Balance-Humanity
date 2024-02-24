import React, { useState, useRef, useEffect } from "react";
import "./styles/welcome_page.css";
import Layout from "../components/Layout";
import CommentSection from "../components/CommentSection";

const humanityData = [
  {
    id: 1,
    title: "Test Title 1",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
  },
  {
    id: 2,
    title: "Test Title 2",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
  },
  {
    id: 3,
    title: "Test Title 3",
    description: "Test description for balance humanity. 2-3 lines",
    image: "/images/test.jpg",
  },
];

const WelcomePage = () => {
  return (
    <>
      <Layout>
        <div className="container-fluid main-page-wrapper">
          <div className="main-page-banner">
            <h1>
              We Are In A Mission To Help <br /> The HelpLess <br /> Join Our
              Action!
            </h1>
          </div>
          <div className="container">
            {humanityData?.map((item) => {
              return (
                <>
                  <div key={item.id} class="custom-card card mb-3">
                    <div className="custom-card-content">
                      <img
                        class="card-img"
                        src={item.image}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                        <p class="card-text">
                          <a href="/donate">
                            <button class="btn btn-2 btn-success" type="submit">
                              Donate Now
                            </button>
                          </a>
                        </p>
                      </div>
                    </div>
                    <CommentSection postId={item.id} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WelcomePage;
