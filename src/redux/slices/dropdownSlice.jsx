import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false, // Default state is closed
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeDropdown: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleDropdown, closeDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
