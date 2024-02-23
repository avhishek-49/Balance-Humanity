import React, { useState } from "react";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 100px)" }}>{children}</div>
      <div>Footer space</div>
    </div>
  );
};

export default Layout;
