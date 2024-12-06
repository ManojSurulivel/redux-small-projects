import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../../redux/slices/newsSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setCategory(search));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search news by title..."
      />
      <button className="search-btn" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
