import React from "react";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import FavoriteList from "./FavoriteList";

const MovieComponent = () => {
  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <MovieSearch />
      <MovieList />
      <FavoriteList />
    </div>
  );
};

export default MovieComponent;
