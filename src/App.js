import React, { Component, useCallback, useState } from "react";
import Expense from "./component/Expense";
import AddItem from "./component/AddItem";

// 상태값(State) 등록 필요함 : 추가되는 아이템을 등록한다 = 수정이 필요함, props는 수정 할 수 없기 때문에 props수정하기 위해서 상태값을 만들어 수정하여 props로 전달해야 함

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: 15800,
      date: new Date(2023, 7, 14).toLocaleDateString(),
    },
    {
      id: "e2",
      title: "New TV",
      price: 2330000,
      date: new Date(2023, 2, 12).toLocaleDateString(),
    },
    {
      id: "e3",
      title: "Notebooks",
      price: 8700,
      date: new Date(2021, 2, 28).toLocaleDateString(),
    },
    {
      id: "e4",
      title: "Standing Desk (Wooden)",
      price: 599000,
      date: new Date(2020, 5, 12).toLocaleDateString(),
    },
  ];

  const [newExpenses, setNewExpenses] = useState(expenses);

  return (
    <div className="App app">
      <AddItem
        expense={newExpenses}
        addNewItem={(item) => {
          setNewExpenses((expenses) => [
            ...expenses,
            { ...item, id: newExpenses.length + 1 },
          ]);
        }}
      ></AddItem>
      <Expense expenses={newExpenses}></Expense>
    </div>
  );
};

export default App;
