import React from "react";
import StockForm from "./StockForm";
import StockList from "./StockList";
import "./StockTrackerComponent.css";

const StockTrackerComponent = () => {
  return (
    <div className="app">
      <h1>Stock Tracker</h1>
      <StockForm />
      <StockList />
    </div>
  );
};

export default StockTrackerComponent;
