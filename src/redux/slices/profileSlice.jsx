import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
  email: "johndoe@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { name, email, preferences } = action.payload;
      state.name = name || state.name;
      state.email = email || state.email;
      state.preferences = { ...state.preferences, ...preferences };
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
