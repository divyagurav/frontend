import "./ExpenseItem.css";
import "./ExpenseDate.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div class="expense-date__month">{month}</div>
        <div className="expense-date__day">{year}</div>
        <div className="expense-date__year">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.Amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
