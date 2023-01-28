import React, { useState } from "react";
import "./BmrCalculator.css";

const BmrCalculator = (props) => {

  const bmrCalculator = (age, height, weight, activity, gender) =>{

    /*
        For men: 66.47 + (6.24 × weight in pounds) + (12.7 × height in inches) − (6.75 × age in years).
        For women: BMR = 65.51 + (4.35 × weight in pounds) + (4.7 × height in inches) - (4.7 × age in years)
    */
    
    if (gender === "Male") {
      return  Math.round((66.47 + (6.24 * Number(weight)) + (12.7 * Number(height)) - (6.75 * Number(age))) * Number(activity));
    }
    else {
      return Math.round((65.51 + (4.35 * Number(weight)) + (4.7 * Number(height)) - (4.7 * Number(age))) * Number(activity));
    }
    


  };


  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [gender, setGender] = useState("");
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const heightHandler = (event) => {
    setHeight(event.target.value);
  };

  const weightHandler = (event) => {
    setWeight(event.target.value);
  };

  const activityHandler = (event) => {
    setActivity(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const submitMetrics = (event) => {
    event.preventDefault();
    props.onSetCalories(bmrCalculator(age, height, weight, activity, gender));

    setAge("");
    setWeight("");
    setHeight("");
    setActivity("");
    setGender("");
  };

  return (
    <div className="form-main">
      <form onSubmit={submitMetrics}>
        <div className="form-controls">
          <div className="form-control">
            <label>Age: </label>
            <input type="text" value={age} onChange={ageHandler} />
          </div>
          <div className="form-control">
            <label>Height: </label>
            <input type="text" value={height} onChange={heightHandler} />
          </div>
          <div className="form-control">
            <label>Weight: </label>
            <input type="text" value={weight} onChange={weightHandler} />
          </div>
          <div className="form-control">
            <label>Activity Factor: </label>
            <input type="text" value={activity} onChange={activityHandler} />
          </div>
          <div className="form-radio">
            <label>Male </label>
            <input type="radio" value="Male" checked={gender === "Male"} onChange={genderHandler}/>
            <label>Female </label>
            <input type="radio" value="Female" checked={gender === "Female"} onChange={genderHandler}/>
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BmrCalculator;
