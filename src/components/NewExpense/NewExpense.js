import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
// handles the change between the "add new expense" and form
     const [statusUpdate, setStatusUpdate] = useState(false)

const saveExpenseDataHandler = (enteredExpenseData) => {
const expenseData = {
    ...enteredExpenseData, 
    id: Math.random().toString()
};
// console.log(expenseData)
props.onAddExpense(expenseData)
setStatusUpdate(false);
};

//  the trigger for the change between images/sections 
const startUpdateHandler = () => {
    setStatusUpdate(true);
};

const reverseUpdateHandler = () => {
    setStatusUpdate(false);
};

return (
    <div className='new-expense'>
        {/* ========= when using conditions to change the image or section on a page use dynamic expression {} around the elements =========*/}
       {/* ======== the button is shown when the user is not updating the status of the form. hence !statusUpdate =========*/}
       {!statusUpdate && <button onClick={startUpdateHandler}> Add New Expense</button>}
       {/* ========  process to pass data upstream. having it as "on" helps inidcate that it is a function that was created ======*/}
       {/* ====== the form is shown when the user is updating the status  ========= */}
       { statusUpdate && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={reverseUpdateHandler} />}
    </div>
)
}



export default NewExpense;