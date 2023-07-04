import React, { Component, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const Expense = (props) => {
    //useState값 만들고 onChange에 필요한 Handler 만들기 
    const years = [
        {value:2023, name:"2023"},
        {value:2022, name:"2022"},
        {value:2021, name:"2021"},
        {value:2020, name:"2020"}
    ];

    const [selectedYears, setSelectedYears] = useState('');

    const handleChangeYears = (e) => {
        console.log(e.target.value);
    };

  return (
    <div className="expense__list">
      <form className="purchase_year">
        <select name="selectYear" id="years" onChange={handleChangeYears} defaultValue={selectedYears}>
          <option value={years[0].value}>{years[0].name}</option>
          <option value={years[1].value}>{years[1].name}</option>
          <option value={years[2].value}>{years[2].name}</option>
          <option value={years[3].value}>{years[3].name}</option>
        </select>
      </form>

      {props.expenses.map((el, idx) => {
        // console.log(el);
        return (
          <ExpenseItem
            idx={idx}
            date={el.date}
            title={el.title}
            price={el.price}
            key={el.id}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

// function Expense(props) {
//     return(
//         <div className="expense__list">
//             {
//                 props.expenses.map((el, idx)=>{
//                     // console.log(el);
//                     return <ExpenseItem date={el.date} title={el.title} price={el.price} key={el.id}></ExpenseItem>
//                 })
//             }

//            {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].price}></ExpenseItem>
//             <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].price}></ExpenseItem>
//             <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].price}></ExpenseItem>
//             <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].price}></ExpenseItem> */}
//         </div>
//     );
// }

export default Expense;
