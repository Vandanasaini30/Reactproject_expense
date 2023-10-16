import React, {useState} from "react";
//import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

  const Dummy_expenses = [
    {
      id:'e1',
      title: "life insurance",
      amount: 2345,
      date: new Date(2021, 3, 4),
      location: "net-banking",
    },
    {
      id:'e2',
      title: "car insurance",
      amount: 1234,
      date: new Date(2023, 3, 12),
      location: "net-banking",
    },
    {
      id:'e3',
      title: "health insurance",
      amount: 6789,
      date: new Date(2021, 3, 12),
      location: "net-banking",
    },
    {
      id:'e4',
      title: "life term insurance",
      amount: 4567,
      date: new Date(2021, 3, 23),
      location: "net-banking",
    },
  ];
  const App=()=> {
    const[expenses,setExpenses]=useState(Dummy_expenses);
   
 const addExpenseHandler= expense=>{
  setExpenses((preExpenses)=>{
    return[expense, ...preExpenses];
  });
 }


 /* return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "let/s get started"),
    React.createElement(Expenses,{item:items})
  );*/
   return(
     <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses item={expenses}/>
  </div>
  );
}
export default App;
