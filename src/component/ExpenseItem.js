import React, { Component } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense__item">
      <p className="txt date">{props.date}</p>
      <p className="txt title">{props.title}</p>
      <p className="txt price">{props.price}</p>
    </div>
  );
}

export default ExpenseItem;
