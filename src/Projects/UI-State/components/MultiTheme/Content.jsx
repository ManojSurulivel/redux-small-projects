import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const theme = useSelector((state) => state.multitheme.theme);

  return (
    <div className={`content ${theme}`}>
      <h1>Welcome to the Multi-Theme App!</h1>
      <p>The current theme is applied to this content area.</p>
    </div>
  );
};

export default Content;
