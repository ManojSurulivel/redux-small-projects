import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for fetching news articles
export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts" // Replace with your news API
  );
  return response.data.slice(0, 20); // Limiting to 20 articles
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    filteredArticles: [],
    category: "all",
    status: "idle",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      if (action.payload === "all") {
        state.filteredArticles = state.articles;
      } else {
        state.filteredArticles = state.articles.filter((article) =>
          article.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
        state.filteredArticles = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setCategory } = newsSlice.actions;
export default newsSlice.reducer;
