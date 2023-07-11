import React, { useState } from "react";
import "./AddItem.css";

// 이벤트리스너

const AddItem = (props) => {
  //useState 합치기
  const [newItem, setNewItem] = useState({
    id: "1",
    title: "Diary",
    price: 100,
    purchaseDate: "29.June.2023",
  });

  // const [title, setTitle] = useState("Ice Cream");
  // const [price, setPrice] = useState(100);
  // const [purchaseDate, setPurchaseDate] = useState("01.07.2023");

  const handleChangeTitle = (event) => {
    // console.log(event.target.value);
    // setTitle(event.target.value);
    setNewItem({ ...newItem, title: event.target.value });
  };

  const handleChangePrice = (event) => {
    // setPrice(event.target.value);
    setNewItem({ ...newItem, price: event.target.value });
  };

  const handleChangePurchaseDate = (event) => {
    // setPurchaseDate(event.target.value);
    setNewItem({ ...newItem, purchaseDate: event.target.value });
  };

  const handleClickAddItem = (event) => {
    console.log(props.expenses);
  };

  return (
    <form className="input_box">
      <ul className="input">
        <li className="ip_title">
          <span>품목</span>
          <input
            type="text"
            id="title"
            defaultValue={newItem.title}
            onChange={handleChangeTitle}
          />
        </li>
        <li className="ip_price">
          <span>가격</span>
          <input
            type="number"
            id="price"
            defaultValue={newItem.price}
            onChange={handleChangePrice}
          />
        </li>
        <li className="ip_date">
          <span>날짜</span>
          <div className="datePicker">
            <input
              type="text"
              id="date"
              defaultValue={newItem.purchaseDate}
              onChange={handleChangePurchaseDate}
            />
            {/* <i className="ico_calander"></i> */}
          </div>
        </li>
      </ul>
      <button className="btn" type="button" onClick={handleClickAddItem}>
        추가
      </button>
    </form>
  );
};

export default AddItem;
