import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const[title,setTitle] = useState(props.title);
    // any name to the above array element. firste element is initial title, newly settile name;

  const clickHandler = () => {
    
    //title = "Updated!"; // value is not updating in the DOM.. why? bcoz need to use state

    setTitle( "Updated" ); // 
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2> 
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change the title</button>
    </Card>
  );
}
export default ExpenseItem;
