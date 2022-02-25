import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';
import './Card.css';
function ExpenseItem( props ){
    const expensetitle = "car insurance";
    const expensamount = 6763;
    const expensedob  = new Date( 2022, 2,23);
   
    return (
        <Card className="expense-item">  
            <ExpenseDate dob={props.dob}></ExpenseDate>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;