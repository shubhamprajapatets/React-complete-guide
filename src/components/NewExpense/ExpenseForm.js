import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
    const [entredTitle,setEnteredTitle] = useState('');
    const [entredAmount,setEnteredAmount] = useState('');
    const [entredDate,setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     entredTitle:'',
    //     entredAmount:'',
    //     entredDate:''
    // });

    const titleChangeHandler =(event) => {
         setEnteredTitle(event.target.value);

        //2 setUserInput({
        //     ...userInput,
        //     entredTitle: event.target.value,
        // });

        //3 setUserInput((prevState) =>{
        //     return { ...prevState,entredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = event =>{
         setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     entredAmount: event.target.value,
        // });
        
        // setUserInput((prevState) =>{
        //     return { ...prevState,entredAmount: event.target.value};
        // });
    };

    const dateChangeHandler = event =>{
         setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     entredDate: event.target.value,
        // });

        // setUserInput((prevState) =>{
        //     return { ...prevState,entredTitle: event.target.value};
        // });
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title:entredTitle,
            amount:entredAmount,
            date: new Date(entredDate)
        };

       props.onSaveExpenseData(expenseData);
       setEnteredTitle('');
       setEnteredAmount('');
       setEnteredDate(''); 
    };

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense_controls'>
         <div className='new-expense_control'>
             <label>Title</label>
             <input 
             type='text'
             value={entredTitle}
             onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense_control'>
             <label>Amount</label>
             <input 
             type='number' 
             min="0.01" 
             step="0.01"
             value={entredAmount} 
             onChange={amountChangeHandler}  />
        </div>
        <div className='new-expense_control'>
             <label>Date</label>
             <input 
             type='date'
             min="2019-02-01"
              max="2022-12-31"
              value={entredDate} 
             onChange={dateChangeHandler} />
        </div>
     </div>
     <div className=".new-expense_actions">
         <button type="button" onClick={props.onCancel}>Cancel</button>
         <button type="submit">Add Expense</button>    
     </div>
   </form>
 );
};

export default ExpenseForm;