import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div class="itembox">
      <p class="txt date"><span>2023년</span> 6월 10일</p>
      <p class="txt name">New TV</p>
      <p class="txt price">₩ 20,000</p>
    </div>
  );
}

export default ExpenseItem;
