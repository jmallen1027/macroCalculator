import "./MacrosRange.css";
import React, { useState } from "react";

const MacrosRange = (props) => {
  console.log("Rendering Macros Range");
  console.log(props.onStateChange)

  const {protien: jeff, fats: tom, carbs: barry} = props.onStateChange[0]
  console.log(barry)
  const newMacCreator = ({name, value}, percent) => {
    return {name, value, percent:percent}
  }


  const [protienRange, setProtienRange] = useState(0);
  const [fatsRange, setFatsRange] = useState(0);
  const [carbsRange, setCarbsRange] = useState(0);
  const [rangeCounter, setRangeCounter] = useState(100);

  const rangeHandler = (range) => {
    setRangeCounter(range)
  };


  const protienRangeHandler = (event) => {
    setProtienRange(event.target.value);
    
    
    props.onProtienHandler(event.target.value / 100)

  };
  const fatsRangeHandler = (event) => {
    setFatsRange(event.target.value);
    
    props.onFatHandler(event.target.value / 100)
  };
  const carbsRangeHandler = (event) => {
    setCarbsRange(event.target.value);
    props.onCarbHandler(event.target.value / 100)
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
    console.log(newPercs)
    console.log(newMacroList)
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
            max={rangeHandler}
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
