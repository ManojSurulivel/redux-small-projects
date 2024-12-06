import React from "react";
import { Line } from "react-chartjs-2";

const CryptoDetails = ({ sparklineData, name }) => {
  const data = {
    labels: Array.from({ length: sparklineData.length }, (_, i) => i),
    datasets: [
      {
        label: `${name} Price Trend`,
        data: sparklineData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    },
  };

  return (
    <div className="crypto-details">
      <Line data={data} options={options} />
    </div>
  );
};

export default CryptoDetails;
