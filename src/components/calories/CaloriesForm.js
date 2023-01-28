import React, { useState } from "react";
import "./CaloriesForm.css";
const CaloriesForm = (props) => {
  console.log("Rendering Calories Form")
  const [cals, setCals] = useState("");
  const calorieFormHandler = (event) => {
    setCals(Number(event.target.value));

    props.onChangeCalories(Number(event.target.value));
  };
  console.log(cals)
  const submitHandler = (event) => {
    console.log(cals)
 
   
    props.onEnteredCalories("False");
  };
  return (
    <div className="calories-form">
    <label>Enter Calories: </label>
      <form >
        <input className="calorie-text" type="text" value={cals} onChange={calorieFormHandler} />
      </form>

    </div>
  );
};

export default CaloriesForm;
