import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import './EcommerceComponent.css'

const EcommerceComponent = () => {
  return (
    <div className="app">
      <h1>E-Commerce Dashboard</h1>
      <div className="content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default EcommerceComponent;
