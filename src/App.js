import React from "react";
import Expenses from "./components/Expenses/Expenses";
const App=()=> {
  const items = [
    {
      title: "life insurance",
      amount: 2345,
      date: new Date(2021, 3, 4),
      location: "net-banking",
    },
    {
      title: "car insurance",
      amount: 1234,
      date: new Date(2023, 3, 12),
      location: "net-banking",
    },
    {
      title: "health insurance",
      amount: 6789,
      date: new Date(2021, 3, 12),
      location: "net-banking",
    },
    {
      title: "life term insurance",
      amount: 4567,
      date: new Date(2021, 3, 23),
      location: "net-banking",
    },
  ];

 /* return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "let/s get started"),
    React.createElement(Expenses,{item:items})
  );*/
   return(
     <div>
       <h1>lets get started</h1>
     <Expenses item={items}></Expenses>
  </div>
  );
}
export default App;
