import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStock } from "../../../../redux/slices/stockSlice";

const StockForm = () => {
  const [symbol, setSymbol] = useState("");
  const dispatch = useDispatch();

  const handleAddStock = () => {
    if (symbol) {
      dispatch(addStock(symbol.toUpperCase()));
      setSymbol("");
    }
  };

  return (
    <div className="stock-form">
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={handleAddStock}>Add Stock</button>
    </div>
  );
};

export default StockForm;
