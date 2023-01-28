import "./MacrosRange.css";
import React, { useState } from "react";

const MacrosRange = (props) => {
  console.log("Rendering Macros Range");


  const newMacCreator = ({name, value}, percent) => {
    return {name, value, percent:percent}
  }


  const [protienRange, setProtienRange] = useState(props.onMacros[0].percent * 100);
  const [fatsRange, setFatsRange] = useState(props.onMacros[1].percent * 100);
  const [carbsRange, setCarbsRange] = useState(props.onMacros[2].percent * 100);

  const protienRangeHandler = (event) => {
    setProtienRange(event.target.value);
  };
  const fatsRangeHandler = (event) => {
    setFatsRange(event.target.value);
  };
  const carbsRangeHandler = (event) => {
    setCarbsRange(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();


    const newPercs = [
      protienRange,
      fatsRange,
      carbsRange
    ]

    const newMacroList = props.onMacros.map((macro, index) => {
      return {...newMacCreator(macro, newPercs[index] / 100)}

    })
    props.onTheseMacros(newMacroList);
 
    props.onEditMacros("True");
  };

  return (
    <div className="macro-range-select">
      <form onSubmit={submitHandler}>
      <div className="macro-range-bar">
          <label htmlFor="protien">Protiens: {protienRange} %:</label>
          <input
            type="range"
            value={protienRange}
            min="1"
            max="100"
            onChange={protienRangeHandler}
          />
        </div>
        <div className="macro-range-bar">
          <label htmlFor="fats">Fats: {fatsRange} %</label>
          <input
            type="range"
            value={fatsRange}
            min="1"
            max="100"
            onChange={fatsRangeHandler}
          />
        </div>
        <div className="macro-range-bar">
          <label htmlFor="carbs">Carbs: {carbsRange} %</label>
          <input
            type="range"
            value={carbsRange}
            min="1"
            max="100"
            onChange={carbsRangeHandler}
          />
        </div>
        <div>
      
        <button type="submit" value="True">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MacrosRange;
