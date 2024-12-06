import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRates } from "../../../../redux/slices/currencySlice";
import CurrencySelector from "./CurrencySelector";

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const { rates, status, error } = useSelector((state) => state.currency);

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRates());
    }
  }, [dispatch, status]);

  const handleConversion = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const convertedAmount =
        (amount / rates[fromCurrency]) * rates[toCurrency];
      setResult(convertedAmount.toFixed(2));
    }
  };

  if (status === "loading") {
    return <p>Loading exchange rates...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="converter-controls">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <CurrencySelector
          currencies={rates}
          value={fromCurrency}
          onChange={setFromCurrency}
        />
        <span>to</span>
        <CurrencySelector
          currencies={rates}
          value={toCurrency}
          onChange={setToCurrency}
        />
      </div>
      <button onClick={handleConversion}>Convert</button>
      {result && (
        <p>
          {amount} {fromCurrency} = {result} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
