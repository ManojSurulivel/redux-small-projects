import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepos = createAsyncThunk(
  "github/fetchRepos",
  async (username, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState: {
    repos: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repos = action.payload;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export default githubSlice.reducer;
