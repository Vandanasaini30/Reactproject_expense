import React ,{useState}from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem=(props) =>{
  const [title,setTitle]=useState(props.title );
  const [amount,setAmount]=useState(props.amount);
  console.log('ExpenseItem evaluated by react');

  
  const clickHandler=()=>{
    setTitle('updated'); 
    console.log(title);
  };
  const deleteElement=()=>{
    console.log('Delete Element');
  }
  const changeAmountHandler=()=>{
    setAmount(100);
    console.log(amount);
  }
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>
            {title}
          </h2>
          <div>
            <ExpenseDetail location={props.location}></ExpenseDetail>
          </div>
          <div className="expense-item__price">
            <ExpenseDetail amount={props.amount}></ExpenseDetail>
          </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteElement}>Delete Expense</button>
        <button onClick={changeAmountHandler}>change amount to $100</button>
      </Card>
    </div>
  );
}
export default ExpenseItem;
