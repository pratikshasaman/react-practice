
import ExpenseItem from './components/ExpenseItem';
import './App.css';
import Card from './components/Card';
import './components/Card.css';
function App() {
  const expenses =[
    {
      'title': 'Pratiksha Patil',
      'dob' : new Date( 1998, 7, 28),
      'amount' : 26000
    },
    {
      'title': 'Ganesh Patil',
      'dob' : new Date( 1991, 7, 25),
      'amount' : 25000
    },
    {
      'title': 'Sneha Samane',
      'dob' : new Date( 2006, 3, 22),
      'amount' : 1000000
    }
  ];

  return (
   <Card className="expenses">
   <ExpenseItem title={expenses[0].title} dob={expenses[0].dob} amount={expenses[0].amount}></ExpenseItem>
   <ExpenseItem title={expenses[1].title} dob={expenses[1].dob} amount={expenses[1].amount}></ExpenseItem>
   <ExpenseItem title={expenses[2].title} dob={expenses[2].dob} amount={expenses[2].amount}></ExpenseItem>
   </Card>
  );
}

export default App;
