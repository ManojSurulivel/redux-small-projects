import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../../../../redux/slices/expenseSlice";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const dispatch = useDispatch();

  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.description}: ${expense.amount.toFixed(2)}</span>
              <button onClick={() => dispatch(removeExpense(expense.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
