import React, {useState} from 'react'
// import ExpenseItem from './components/ExpesnseItem'
import Expenses from 'components/Expenses/Expenses'
import NewExpense from 'components/NewExpense/NewExpense'


const dummy_Expenses = [
//   {
//     id:'i1',
//   title:'LG Moniter',
//   amount: 294.64,
// date: new Date(2022,6,20)
// },
// {
//   id:'i2',
// title:'100pk tea candles',
//   amount: 18.89,
// date: new Date(2022,7,11)
// },
// {
//   id:'i3',
// title:'HP laptop',
//   amount: 843.99,
// date: new Date(2022,6,24)
// },
// {
//   id:'i4',
// title:'Sony headphones',
//   amount: 150.95,
// date: new Date(2022,7,5)
// }
]


const App = () => {

const [expenses,setExpenses ] = useState(dummy_Expenses)


const addExpenseHandler = (expense) => {
  // console.log('In App.js')
  // console.log(expense)
  setExpenses((prevExpenses => {
    return [expense, ...prevExpenses]
  }))
}


// useEffect(() => {
// const json = JSON.stringify(storeExpenses)
//     localStorage.setItem("savedExpenseList", json);
 
// }, [storeExpenses]);

// useEffect(() => {
//   const json = localStorage.getItem("savedExpenseList");
//   const savedList = JSON.parse(json);
//   if (savedList) {
//     setStoreExpenses(savedList);
//   }
// }, []);

  return (
  <> 
  
  <NewExpense onAddExpense={addExpenseHandler} />

 

  <Expenses items={expenses}></Expenses>
 
 
  </>
  )
}



export default App;