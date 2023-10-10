import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log('settitle');
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
          </div>
          <div className="new-expense__control label">
            <label>Amount</label>
            <input type="number" min="0.01" onChange={amountChangeHandler} value={enteredAmount} />
          </div>
          <div className="new-expense__control label">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} value={enteredDate} />
          </div>
        </div>
        <div className="new-expense__actions ">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
