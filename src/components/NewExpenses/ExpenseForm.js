import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  /*const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    /*setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    setUserInput((prevState)=>{
      return{...prevState,enteredTitle:event.target.value};
    });*/
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    /*setUserInput({
    ...userInput,
    enteredAmount:event.target.value,
   });*/
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    /*setUserInput({
      ...userInput,
      enteredDate:event.target.value,
    });*/
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control label">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control label">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} />
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
