import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const TodoSlice = createSlice({
  name: "todosName",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.todo.push(action.payload);
    },
    removeItems: (state, action) => {
      state.todo = state.todo.filter((item) => item !== action.payload);
    },
  },
});

export const { addItems, removeItems } = TodoSlice.actions;

export default TodoSlice.reducer;
