import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptoData } from "../../../../redux/slices/cryptoSlice";

const CryptoList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (status === "loading") return <p>Loading cryptocurrency data...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="crypto-list">
      {items.map((crypto) => (
        <div key={crypto.id} className="crypto-item">
          <h3>{crypto.name} ({crypto.symbol.toUpperCase()})</h3>
          <p>Current Price: ${crypto.current_price.toLocaleString()}</p>
          <p>24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%</p>
          <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
