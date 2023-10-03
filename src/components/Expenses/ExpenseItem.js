import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem=(props) =>{
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>
            <ExpenseDetail title={props.title}></ExpenseDetail>
          </h2>
          <div>
            <ExpenseDetail location={props.location}></ExpenseDetail>
          </div>
          <div className="expense-item__price">
            <ExpenseDetail amount={props.amount}></ExpenseDetail>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default ExpenseItem;
