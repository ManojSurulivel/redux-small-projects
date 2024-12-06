import React from "react";
import { useSelector } from "react-redux";

const DataList = () => {
  const { currentPage, itemsPerPage } = useSelector((state) => state.pagination);

  // Example Data: Replace with API or dynamic data
  const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul>
        {displayedData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
