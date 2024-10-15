import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userName: (state) => {
      state.value = !state.value;
    },
  },
});

export const { userName } = userSlice.actions;

export default userSlice.reducer;
