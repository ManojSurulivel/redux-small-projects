import React from "react";
import Sidebar from "./Sidebar";
import ToggleButton from "./ToggleButton";
import './SidebarToggleComponent.css'

const SidebarToggleComponent = () => {
  return (
    <div className="app">
      <ToggleButton />
      <Sidebar />
      <div className="content">
        <h1>Welcome!</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default SidebarToggleComponent;
