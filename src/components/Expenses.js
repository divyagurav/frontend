import Card from "./Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        Amount={expenses[0].Amount}
        date={expenses[0].date}
        LocationOfExpenditure={expenses[0].LocationOfExpenditure}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        Amount={expenses[1].Amount}
        date={expenses[1].date}
        LocationOfExpenditure={expenses[1].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        Amount={expenses[2].Amount}
        date={expenses[2].date}
        LocationOfExpenditure={expenses[2].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        Amount={expenses[3].Amount}
        date={expenses[3].date}
        LocationOfExpenditure={expenses[3].LocationOfExpenditure}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
