import React, { Component } from "react";
import ExpenseItem from "./component/ExpenseItem";

function App() {
  return (
    <div className="App app">
      <ExpenseItem date="2023년 6월 16일" title="New TV" price="₩ 1,000,000"></ExpenseItem>
      <ExpenseItem date="2023년 6월 15일" title="Note" price="₩ 3,000"></ExpenseItem>
    </div>
  );
}


export default App;
