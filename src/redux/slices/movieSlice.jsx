import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch movies from the API
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`
      );
      return response.data.Search || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favorites: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.favorites.some((fav) => fav.imdbID === movie.imdbID)) {
        state.favorites.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.imdbID !== movieId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addFavorite, removeFavorite } = movieSlice.actions;
export default movieSlice.reducer;
