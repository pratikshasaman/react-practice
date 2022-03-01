import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.dob.toLocaleString("en-US", { month: "long" });
  const date = props.dob.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dob.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__date">{date}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
