import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepos } from "../../../../redux/slices/githubSlice";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (username.trim()) {
      dispatch(fetchRepos(username));
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
