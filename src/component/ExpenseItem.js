import { click } from "@testing-library/user-event/dist/click";
import React, { Component, useState } from "react";
import "./ExpenseItem.css";

// function ExpenseItem(props) {
//   return (
//     <div className="expense__item">
//       <p className="txt date">{props.date}</p>
//       <p className="txt title">{props.title}</p>
//       <p className="txt price">{props.price}</p>
//     </div>
//   );
// }

const ExpenseItem = (props) => {
  
  const firstTitle = useState([]);
  function clickHandler(){
    alert('items');
  }

  return (
    <div className="expense__item">
      <p className="txt date">{props.date}</p>
      <p className="txt title">{props.title}</p>
      <p className="txt price">{props.price}</p>
      <button className="changeTitle" onClick={() => clickHandler()}>타이틀 변경</button>
    </div>
  );


}

export default ExpenseItem;
