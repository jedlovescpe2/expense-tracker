//Core
import React, { useState } from "react"

//UI
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [userInput,setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const TitleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        })
    }

    const AmountChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        })
    }

    const DateChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount ,
            date: new Date(userInput.enteredDate),
        }

        props.onSaveExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        })

    }
  

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} name="title" onChange={TitleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2023-12-31" onChange={DateChangeHandler}/>
                </div>

            </div>

            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
}
export default ExpenseForm;