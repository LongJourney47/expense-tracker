import React, {useState, useEffect} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('') 
    const [enteredAmount, setEnteredAmount] = useState('') 
    const [enteredDate, setEnteredDate] = useState('') 

const titleChangeHandler =(event) => {

    // =============  captures user input ========= 
    setEnteredTitle(event.target.value)
    
}
const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)

}
const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)

}


const sumbitHandler = (event) => {
    // will prevent the form from reloading the entire page
event.preventDefault();

// Collects user input data
const expenseData = {
    title: enteredTitle,
    amount: +enteredAmount,
    date: new Date(enteredDate)
}
// console.log(expenseData)
// ======= must execute the function from NewExpense data here. Since a pointer is being passed the function does not need to be refrenced in the same component ==========
props.onSaveExpenseData(expenseData);
// ======= adds a clear functionality, tied to two way binding via the value attribute
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')
}



    return(
        
            <form onSubmit={sumbitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        {/* ===== adding a value attribute can allow for 2 way binding ====== */}
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min="2022-01-01" max='2032-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    {/* ==== passing the reverse handler function here via props to begin the process ======== */}
               <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit' >Add Expense</button>
                   
                </div>
            </form> 
       
    )
}

export default ExpenseForm;