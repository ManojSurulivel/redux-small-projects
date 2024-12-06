import React from "react";
import ThemeToggle from "./ThemeToggle";
import Content from "./Content";
import './MultiThemeComponent.css';


const MultiThemeComponent = () => {
  return (
    <div className="multi-theme">
      <ThemeToggle />
      <Content />
    </div>
  );
};

export default MultiThemeComponent;
