import "./App.css";
//import ExpenseDetails from "./components/ExpenseDetails";

import Expenses from "./components/Expense/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Insurence",
      Amount: 500000,
      date: new Date(2023, 7, 15),
      LocationOfExpenditure: "CarAgency",
    },
    {
      title: "Toilet Paper",
      Amount: 500,
      date: new Date(2023, 6, 5),
      LocationOfExpenditure: "Mall",
    },
    {
      title: "Shoping",
      Amount: 70000,
      date: new Date(2023, 2, 10),
      LocationOfExpenditure: "Clothes",
    },
    {
      title: "Movie",
      Amount: 1000,
      date: new Date(2023, 5, 13),
      LocationOfExpenditure: "Movie",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
