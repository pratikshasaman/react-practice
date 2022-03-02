import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [titleValue, setNewTitle] = useState("");
  const [amountValue, setNewAmount] = useState("");
  const [dateValue, setNewDate] = useState("");

  // const [enteredValue, setNewValue] = useState( {
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
    // setNewValue({
    //     ...enteredValue,
    //     enteredTitle : event.target.value
    // });
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
    // setNewValue({
    //     ...enteredValue,
    //     enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
    // setNewValue({
    //     ...enteredValue,
    //     enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: titleValue,
      amount: amountValue,
      date: dateValue,
    };
    console.log(expenseDate);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleValue} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountValue}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-03-01"
            value={dateValue}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
