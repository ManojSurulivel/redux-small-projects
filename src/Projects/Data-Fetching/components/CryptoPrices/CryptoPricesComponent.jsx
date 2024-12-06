import React from "react";
import CryptoList from "./CryptoList";
import "./CryptoPricesComponent.css";

const CryptoPricesComponent = () => {
  return (
    <div className="app">
      <h1>Crypto Prices</h1>
      <CryptoList />
    </div>
  );
};

export default CryptoPricesComponent;
