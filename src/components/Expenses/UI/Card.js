import React from "react";
import "./Card.css";
import ExpenseDate from "./components/ExpenseDate";
import ExpenseItem from "../Expense/ExpenseItem";
function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
