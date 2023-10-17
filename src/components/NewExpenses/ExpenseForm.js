import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);

  const showFormHandler = () => {
    setFormVisible(true);
  };

  const hideFormHandler = () => {
    setFormVisible(false);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
    hideFormHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense">
        {isFormVisible ? (
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control label">
              <label>Amount</label>
              <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control label">
              <label>Date</label>
              <input type="date" value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
              <button type="button" onClick={hideFormHandler}>Cancel</button>
            </div>
          </div>
        ) : (
          <button onClick={showFormHandler} className="new-expense">Add New Expense</button>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
