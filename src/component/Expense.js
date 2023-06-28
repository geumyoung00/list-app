import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";


const Expense = (props) =>{
    return(
        <div className="expense__list">
            {
                props.expenses.map((el, idx)=>{
                    // console.log(el);
                    return <ExpenseItem date={el.date} title={el.title} price={el.price} key={el.id}></ExpenseItem>
                })
            }
        </div>
    );
}

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