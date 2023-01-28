import "./MacrosRange.css";
import React, { useState } from "react";

const MacrosRange = (props) => {

  const [protienRange, setProtienRange] = useState(30);
  const [fatsRange, setFatsRange] = useState(40);
  const [carbsRange, setCarbsRange] = useState(30);




  const protienRangeHandler = (event) => {
    setProtienRange(event.target.value);

    props.onProtienHandler(event.target.value);
  };
  const fatsRangeHandler = (event) => {
    setFatsRange(event.target.value);

    props.onFatHandler(event.target.value);
  };
  const carbsRangeHandler = (event) => {
    setCarbsRange(event.target.value);
    props.onCarbHandler(event.target.value);
  };

  return (
    <div className="slidecontainer">
      <div>
        <label>Protien</label>
        <input
          type="range"
          value={protienRange}
          min="0"
          max="100"
          onChange={protienRangeHandler}
          className="slider"
        />
      </div>
      <div>
        <label>Fat</label>
        <input
          type="range"
          value={fatsRange}
          min="0"
          max="100"
          onChange={fatsRangeHandler}
          className="slider"
        />
      </div>
      <div>
        <label>Carbs</label>
        <input
          type="range"
          value={carbsRange}
          min="0"
          max="100"
          onChange={carbsRangeHandler}
          className="slider"
        />
      </div>
    </div>
  );
};

export default MacrosRange;
