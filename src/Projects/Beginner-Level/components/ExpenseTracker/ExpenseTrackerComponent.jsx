import React from "react";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";
import './ExpenseTrackerComponent.css';


const ExpenseTrackerComponent = () => {
  return (
    <div className="expense">
      <h1>Expense Tracker</h1>
      <AddExpense />
      <ExpenseList />
      <TotalExpense />
    </div>
  );
};

export default ExpenseTrackerComponent;
