import React, { useState } from "react";
import "./component.css";

// 이벤트리스너

const AddItem = (props) => {

    return (
    <form className="input_box">
      <ul className="input">
        <li className="ip_title">
          <span>품목</span>
          <input type="text" id="title" />
        </li>
        <li className="ip_price">
          <span>가격</span>
          <input type="number" id="price" />
        </li>
        <li className="ip_date">
          <span>날짜</span>
          <div className="datePicker">
            <input type="text" id="date" />
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
