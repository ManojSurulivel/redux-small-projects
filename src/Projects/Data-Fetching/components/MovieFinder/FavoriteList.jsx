import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../../../redux/slices/movieSlice";

const FavoriteList = () => {
  const { favorites } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return (
    <div className="favorite-list">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies added.</p>
      ) : (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <p>{movie.Title}</p>
              <button onClick={() => dispatch(removeFavorite(movie.imdbID))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
