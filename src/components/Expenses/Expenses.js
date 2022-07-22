import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesGraph from './ExpensesGraph'

const Expenses = (props) => {
const [filteredYear,setFilteredYear] = useState('2022')

const filterChangeHandler = (selectedYear) => {
  // console.log('expenses.js')
  // console.log(selectedYear)
  setFilteredYear(selectedYear);
};


const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});



    return(

      <div>
        <Card className='expenses'>
{/* ======  can add mulitple props to an element  ========*/}
{/* // ======== title,amount, and date are props for expenses that will display the data. Musted be further assigned in relevant files by passing props through the component. Then adding prop. in front of relevant data. */}
        <ExpensesFilter selected={filteredYear} 
        onChangeFilter={filterChangeHandler}/>
{/* ==== dynamic expression below ========*/}
{/*=======  can use the && operator to shorten the code.When used it will return the part after the and if the first condition is met     =========*/}

<ExpensesGraph expenses={filteredExpenses}/>

<ExpensesList items={filteredExpenses}/>
       
      </Card>
      </div>
    );
};


export default Expenses;