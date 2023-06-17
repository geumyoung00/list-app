import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";

function Expense() {
    return(
        <div className="expense__list">
            <ExpenseItem date="2023년 6월 16일" title="New TV" price="₩ 1,000,000"></ExpenseItem>
            <ExpenseItem date="2023년 6월 15일" title="Note" price="₩ 4,000"></ExpenseItem>
            <ExpenseItem date="2023년 6월 13일" title="Sunblock" price="₩ 11,000"></ExpenseItem>
        </div>
    );
}

export default Expense;