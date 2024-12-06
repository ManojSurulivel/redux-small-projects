import React from "react";
import Pagination from "./Pagination";
import DataList from "./DataList";

const PaginationComponent = () => {
  return (
    <div className="app">
      <h1>Pagination with React & Redux</h1>
      <DataList />
      <Pagination />
    </div>
  );
};

export default PaginationComponent;
