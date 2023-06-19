import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";

function Expense() {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          price: 15800,
          date: new Date(2022, 7, 14).toLocaleString(),
        },
        {
          id: 'e2',
          title: 'New TV',
          price: 2330000,
          date: new Date(2023, 2, 12).toLocaleString(),
        },
        {
          id: 'e3',
          title: 'Notebooks',
          price: 8700,
          date: new Date(2021, 2, 28).toLocaleString(),
        },
        {
          id: 'e4',
          title: 'Standing Desk (Wooden)',
          price: 599000,
          date: new Date(2020, 5, 12).toLocaleString(),
        },
      ];

      

    return(
        <div className="expense__list">
            {
                expenses.map((el, idx)=>{
                    console.log(el);
                    return <ExpenseItem date={el.date} title={el.title} price={el.price} key={idx}></ExpenseItem>
                })
            }

           {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].price}></ExpenseItem>
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].price}></ExpenseItem>
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].price}></ExpenseItem>
            <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].price}></ExpenseItem> */}
        </div>
    );
}

export default Expense;