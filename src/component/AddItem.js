import React, { useState } from "react";
import "./component.css";

// 이벤트리스너

const AddItem = (props) => {
    
    const [title, setTitle] = useState('Ice Cream');
    const [price, setPrice] = useState(100);
    const [purchaseDate, setPurchaseDate] = useState('01.01.2023');

    const handleChangeTitle = (event) => {``
        // console.log('event',event);
        // console.log('event.target.value',event.target);

        setTitle(event.target.value);

    };

    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleChangePurchaseDate = (event) => {
        setPurchaseDate(event.target.value);
    };


    console.log(title, price, purchaseDate);

    return (
    <form className="input_box">
      <ul className="input">
        <li className="ip_title">
          <span>품목</span>
          <input type="text" id="title" defaultValue={title} onChange={handleChangeTitle} />
        </li>
        <li className="ip_price">
          <span>가격</span>
          <input type="number" id="price" defaultValue={price} onChange={handleChangePrice} />
        </li>
        <li className="ip_date">
          <span>날짜</span>
          <div className="datePicker">
            <input type="text" id="date" defaultValue={purchaseDate} onChange={handleChangePurchaseDate} />
            <i className="ico_calander"></i>
          </div>
        </li>
      </ul>
      <button className="btn" type="button">
        추가
      </button>
    </form>
  );
};

export default AddItem;
