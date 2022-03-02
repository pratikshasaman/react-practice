import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import "./components/Expenses/Expenses.css";
function App() {
  const expenses = [
    {
      title: "Pratiksha Patil",
      date: new Date(1998, 7, 28),
      amount: 26000,
    },
    {
      title: "Ganesh Patil",
      date: new Date(1991, 7, 25),
      amount: 25000,
    },
    {
      title: "Sneha Samane",
      date: new Date(2006, 3, 22),
      amount: 1000000,
    },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
