import React, {useState} from "react"
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {

    const [formLoaded, setFormLoaded] = useState(false);

    const saveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: `e1${Math.random().toString().toString()}`,
        };
        props.onAddExpense(expenseData);
        // console.log(expenseData)
    };

    const onAddNewExpense = () =>{
        setFormLoaded(true);
    }

    const CancelButtonHandler = (event) =>{
        setFormLoaded(false);
    }

    // if(!formLoaded){
    //     return(
    //         <form onSubmit={addNewExpenseButtonHandler}>
    //             <div>
    //                 <button type='submit'>Add New Expense</button>
    //             </div>
    //         </form>
    //     );
    // }



    return (
        <div className="new-expense">
            { !formLoaded && <button onClick={onAddNewExpense} type='submit'>Add New Expense</button> }
            { formLoaded && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelButtonHandler} /> }
        </div>
    );
}
export default NewExpense;