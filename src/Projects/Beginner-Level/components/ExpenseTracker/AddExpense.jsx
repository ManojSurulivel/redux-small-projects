import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../../../redux/slices/expenseSlice";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    if (description.trim() && amount > 0) {
      dispatch(
        addExpense({
          id: Date.now(),
          description,
          amount: parseFloat(amount),
        })
      );
      setDescription("");
      setAmount("");
    }
  };

  return (
    <div className="add-expense">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpense;
