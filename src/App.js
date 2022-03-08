import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [{
    id: 'e1',
    title: 'Bike Insurance',
    amount: 250.45,
    date: new Date(2001, 2, 20)
},
{
    id: 'e2',
    title: 'New Car',
    amount: 550.35,
    date: new Date(2002, 5, 28)
},
{
    id: 'e3',
    title: 'Paper',
    amount: 125.65,
    date: new Date(2003, 3, 25)
},
{
    id: 'e4',
    title: 'New Watch',
    amount: 200.45,
    date: new Date(2022, 2, 16)
},
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense =>{
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    };

    // return React.createElement('div', {}, React.createElement('h2', {}, "Let's get started!"), React.createElement(Expenses, {
    //     items: expenses
    // }));
    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items = {expenses}/>
            </div>
    );
}
export default App;