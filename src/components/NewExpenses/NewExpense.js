import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
 const saveDataHandler=(enteredExpenseData)=>{
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
 }

return(
    <div className=''>
        <ExpenseForm onSaveData={saveDataHandler}/>
    </div>
)
}
export default NewExpense;