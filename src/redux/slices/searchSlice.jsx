import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  suggestions: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
  },
});

export const { setQuery, setSuggestions, clearSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
