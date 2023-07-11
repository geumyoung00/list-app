import React, { useState } from "react";
import "./AddItem.css";

// 이벤트리스너

const AddItem = (props) => {
  //useState 합치기
  const [newItem, setNewItem] = useState({
    id: "00",
    title: "Diary",
    price: 100,
    date: new Date().toLocaleDateString(),
  });

  // const [title, setTitle] = useState("Ice Cream");
  // const [price, setPrice] = useState(100);
  // const [purchaseDate, setPurchaseDate] = useState("01.07.2023");

  const handleChangeTitle = (e) => {
    // console.log(event.target.value);
    // setTitle(event.target.value);
    setNewItem({ ...newItem, title: e.target.value });
  };

  const handleChangePrice = (e) => {
    // setPrice(event.target.value);
    setNewItem({ ...newItem, price: e.target.value });
  };

  const handleChangeDate = (e) => {
    // setPurchaseDate(event.target.value);
    setNewItem({ ...newItem, date: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewItem(newItem);
  };

  return (
    <form className="input_box" onSubmit={handleSubmit}>
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
              defaultValue={newItem.date}
              onChange={handleChangeDate}
            />
            {/* <i className="ico_calander"></i> */}
          </div>
        </li>
      </ul>
      <button className="btn" type="submit">
        추가
      </button>
    </form>
  );
};

export default AddItem;
