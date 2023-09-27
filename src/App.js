import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "car Insurance",
      amount: 20000,
      location:"EMI",
      date: new Date(2020, 2, 6),
    },
    {
      title: "health Insurance",
      amount: 30000,
      location:"EMI",
      date: new Date(2021, 2, 6),
    },
    {
      title: "life Insurance",
      amount: 40000,
      location:"EMI",
      date: new Date(2022, 2, 6),
    },
    {
      title: "term Insurance",
      amount: 50000,
      location:"EMI",
      date: new Date(2023, 2, 6),
    },
  ];
  return (
    <div>
      <h2>let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].location}
        date={expenses[0].date}
      ></ExpenseItem>
      
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].location}
        date={expenses[1].date}
      ></ExpenseItem>
      
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].location}
        date={expenses[2].date}
      ></ExpenseItem>
      
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        location={expenses[3].location}
        date={expenses[3].date}
      ></ExpenseItem>
      
      
      
    </div>
  );
}

export default App;
