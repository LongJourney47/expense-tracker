import React, {useState} from 'react'
// import ExpenseItem from './components/ExpesnseItem'
import Expenses from 'components/Expenses/Expenses'
import NewExpense from 'components/NewExpense/NewExpense'


const listExpenses = [

]


const App = () => {

const [expenses,setExpenses ] = useState(listExpenses)


const addExpenseHandler = (expense) => {
  // console.log('In App.js')
  // console.log(expense)
  setExpenses((prevExpenses => {
    return [expense, ...prevExpenses]
  }))
}

  return (
  <> 
  
  <NewExpense onAddExpense={addExpenseHandler} />

 

  <Expenses items={expenses}></Expenses>
 
 
  </>
  )
}



export default App;