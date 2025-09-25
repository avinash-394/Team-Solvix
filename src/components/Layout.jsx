import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css"; // optional for custom styles

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Side: Header + Content */}
      <div className="layout-right">
        <Header />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
