import React from 'react'
import  './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// ======= hooks must be called directly within the react components functions ==========
const ExpesnseItem = (props) => {
// const [title, setTitle] = useState(props.title)
  // ideal to add handler to be clear that it is a function attached to an event
// const clickHandler = () => {
//   console.log(title) 
//   setTitle('Updated!!')
// }

  return (
    // will be used in the ExpensesList file 
    <li>
  <Card className='expense-item'> 
  {/* have to use key with props  */}
<ExpenseDate date={props.date}/>
<div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>${props.amount}</div>
</div>


  </Card>
  </li>
  )
}



export default ExpesnseItem;