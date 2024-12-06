import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData, removeStock } from "../../../../redux/slices/stockSlice";

const StockList = () => {
  const dispatch = useDispatch();
  const { items, symbols, status, error } = useSelector((state) => state.stocks);

  useEffect(() => {
    if (symbols.length > 0) {
      const interval = setInterval(() => {
        dispatch(fetchStockData(symbols));
      }, 5000); // Update every 5 seconds
      return () => clearInterval(interval);
    }
  }, [dispatch, symbols]);

  if (status === "loading") return <p>Loading stock data...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="stock-list">
      {items.map((stock) => (
        <div key={stock.symbol} className="stock-item">
          <h3>{stock.symbol}</h3>
          <p>Current Price: ${stock.data.c}</p>
          <p>High: ${stock.data.h}</p>
          <p>Low: ${stock.data.l}</p>
          <p>Open: ${stock.data.o}</p>
          <button onClick={() => dispatch(removeStock(stock.symbol))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default StockList;
