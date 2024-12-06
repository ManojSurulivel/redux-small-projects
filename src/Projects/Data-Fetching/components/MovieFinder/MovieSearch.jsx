import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../../../redux/slices/movieSlice";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchMovies(query));
    }
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
