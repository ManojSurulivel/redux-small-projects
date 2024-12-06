import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./DataFetch.css";

const DataFetch = () => {
  return (
    <div className="data-fetch-container">
      <div className="sidebar">
        <NavLink to="/DataFetch"><h2 >Projects</h2></NavLink>
        <ul className="datafetch-headings">
          <li><NavLink to="/DataFetch/newscomponent"> News </NavLink></li>
          <li><NavLink to="/DataFetch/weatherfetch"> Weather </NavLink></li>
          <li><NavLink to="/DataFetch/github"> GithubRepo </NavLink></li>
          <li><NavLink to="/DataFetch/quizapp"> Quiz App </NavLink></li>
          <li><NavLink to="/DataFetch/reddit"> RedditViewer </NavLink></li>
          <li><NavLink to="/DataFetch/currency"> Currency </NavLink></li>
          <li><NavLink to="/DataFetch/movie"> Movies </NavLink></li>
          <li><NavLink to="/DataFetch/ecommerce"> E-commerce </NavLink></li>
          <li><NavLink to="/DataFetch/stock"> StockTracker </NavLink></li>
          <li><NavLink to="/DataFetch/crypto"> CryptoCurrency </NavLink></li>
        </ul>
      </div>
      
    <div className="main-content">
    <h1 className="heading">Data Fetch Component</h1> <hr/>
   <Outlet /> 

    </div>    
    </div>
  );
};

export default DataFetch;