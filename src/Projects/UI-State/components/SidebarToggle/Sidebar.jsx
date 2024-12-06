import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
