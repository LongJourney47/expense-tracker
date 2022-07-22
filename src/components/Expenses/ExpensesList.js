import React from 'react';
import ExpesnseItem from './ExpesnseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
   
    // displays this message when no items are found for said year
if(props.items.length === 0 ) {
    return <h2 className='expenses-list__fallback'>Found no expesnes.</h2>
}

    return (
        // sorts the infomation by year
        <ul className='expenses-list'>
            {props.items.map((expense) => 
  //=============== must use () when dealing with an element inside of the function like the below section ==========
  (<ExpesnseItem 
    key={expense.id}
  title={expense.title} 
  amount={expense.amount} 
  date={expense.date}/>))
}
        </ul>
    )
}


export default ExpensesList;