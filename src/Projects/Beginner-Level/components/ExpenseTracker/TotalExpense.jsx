import React from "react";
import { useSelector } from "react-redux";

const TotalExpense = () => {
  const total = useSelector((state) =>
    state.expense.expenses.reduce((sum, expense) => sum + expense.amount, 0)
  );

  return (
    <div className="total-expense">
      <h3>Total Expense: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default TotalExpense;
