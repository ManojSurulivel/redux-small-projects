import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../../redux/slices/sidebarSlice";

const ToggleButton = () => {
  const dispatch = useDispatch();

  return (
    <button className="toggle-button" onClick={() => dispatch(toggleSidebar())}>
      Toggle Sidebar
    </button>
  );
};

export default ToggleButton;
