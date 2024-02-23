import React, { useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 120px)" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
