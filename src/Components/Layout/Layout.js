import React from "react";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="children-content">{children}</div>
    </div>
  );
};

export default Layout;
