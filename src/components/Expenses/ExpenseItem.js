import React, {useState} from "react"

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title);

  function ChangeTitleHandler(){
    setTitle('Updated!');
    console.log(title);
  }

  return (
      <li>
        <Card className="expense-item">

          <ExpenseDate date={props.date}/>
          
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">
              {(props.amount).toFixed(2)} SR
            </div>
            <button onClick={ChangeTitleHandler}>Change Title</button>
          </div>
        </Card>
      </li>
  );
}

export default ExpenseItem;
