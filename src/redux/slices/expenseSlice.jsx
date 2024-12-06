import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [], // Array of expense objects {id, description, amount}
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload); // Add a new expense
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      ); // Remove expense by id
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
