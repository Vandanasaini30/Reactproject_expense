import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const titleChange=(event)=>{
    console.log(event.target.value)
  }
  return (
    <form>
      <div className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChange}></input>
          </div>
          <div className="new-expense__control label">
            <label>Amount</label>
            <input type="number" min="0.01"></input>
          </div>
          <div className="new-expense__control label">
            <label>Date</label>
            <input type="date"></input>
          </div>
        </div>
        <div className="new-expense__actions ">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
