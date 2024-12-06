import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Reddit posts
export const fetchPosts = createAsyncThunk(
  "reddit/fetchPosts",
  async (subreddit, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${subreddit}.json`
      );
      return response.data.data.children.map((post) => post.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const redditSlice = createSlice({
  name: "reddit",
  initialState: {
    subreddit: "popular",
    posts: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    setSubreddit: (state, action) => {
      state.subreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setSubreddit } = redditSlice.actions;
export default redditSlice.reducer;
