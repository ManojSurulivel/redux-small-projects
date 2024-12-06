import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../../../redux/slices/movieSlice";

const MovieList = () => {
  const { movies, status, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  if (status === "loading") {
    return <p>Loading movies...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <p>{movie.Title}</p>
              <button onClick={() => dispatch(addFavorite(movie))}>
                Add to Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
