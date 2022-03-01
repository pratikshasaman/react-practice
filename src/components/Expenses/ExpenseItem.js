import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import "../UI/Card.css";
function ExpenseItem(props) {
  let title = props.title;
  const clickHandler = () => {
    title = "Updated!"; // value is not updating in the DOM.. why? bcos need to use state
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate dob={props.dob}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2> 
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change the title</button>
    </Card>
  );
}
export default ExpenseItem;
