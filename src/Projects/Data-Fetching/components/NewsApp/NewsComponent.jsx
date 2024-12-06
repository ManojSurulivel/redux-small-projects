import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../../../redux/slices/newsSlice";
import NewsList from "./NewsList";
import NewsFilter from "./NewsFilter";
import SearchBar from "./SearchBar";
// import "./NewsComponent.css";

const NewsComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="">
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1>News App</h1>
      <SearchBar />
      <NewsFilter />
      </div>
      <NewsList />
    </div>
  );
};

export default NewsComponent;
