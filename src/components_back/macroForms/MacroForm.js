import React, { useState } from "react";

import "./MacroForm.css";

const MacroForm = (props) => {
  const [caloires, setCalories] = useState();

  const calorieSetter = (event) => {
    event.preventDefault();
    console.log(event)
    setCalories(event.target.value);
    props.onCalorieSetter(event.target.value);
  }
  return (

    <div>
      <button></button>
    </div>
    /*<div className="macro-form-box">
      <form onSubmit={calorieSetter}>
        <div>
          <label>Calories</label>
          <br></br>
          <input type="number"  value={caloires}></input>
        </div>
        <div>
          <label>Protien Percentage</label>
          <br></br>
          <input type="number"></input>
        </div>
        <div>
          <label>Fats Percentage</label>
          <br></br>
          <input type="number"></input>
        </div>
        <div>
          <label>Carbs Percentage</label>
          <br></br>
          <input type="number"></input>
        </div>
        <button type="submit">Calculate Macros</button>
      </form>
    </div>*/
  );
};

export default MacroForm;
