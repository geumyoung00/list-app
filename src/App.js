import React, { Component } from "react";
import Expense from "./component/Expense";

function App() {
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
  
  return (
    <div className="App app">
      <Expense expenses={expenses}></Expense>
    </div>
  );
}


export default App;
