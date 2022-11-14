//Core
import React, {useState} from "react"

//Components
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

//UI
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) =>{

  //state of filteredYear
  const [filteredYear,setFilteredYear] = useState('2022')

  //sets the initialexpenses based from the totalExpenses and filteredYear
  const initialExpenses =  props.expenses.filter(
    expense => expense.date.getFullYear().toString()=== filteredYear)
    
  //state of filteredExpenses
  const filteredExpenses = initialExpenses;

  //function handler if year is filtered
  const onSelectYearData = (selectedYear) =>{


    //sets the value of filteredYear
    setFilteredYear(selectedYear);

  }

  return (
          <Card className="expenses" >
            <ExpensesFilter selected={filteredYear} onSelectYear={onSelectYearData} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
          </Card>
  );
}

export default Expenses;