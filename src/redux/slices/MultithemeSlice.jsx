import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // Default theme
};

const MultithemeSlice = createSlice({
  name: "multitheme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload; // Set the selected theme
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = MultithemeSlice.actions;

export default MultithemeSlice.reducer;
