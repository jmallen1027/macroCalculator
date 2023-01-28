import React, { useState } from "react";
import MacrosRange from "./MacrosRange";
import MacrosDisplay from "./MacrosDisplay";
import MacroPieChart from "./MacroPieChart";
import "./Macros.css";
const MacrosDisplayBox = (props) => {


  const [protienState, setProtienState] = useState(30);
  const [fatState, setFatState] = useState(40);
  const [carbState, setCarbState] = useState(30);

  const protienHandler = (pro) => {
    setProtienState(pro);
  };

  const fatHandler = (fat) => {
    setFatState(fat);
  };

  const carbHandler = (carb) => {
    setCarbState(carb);
  };

  const [macroObj, setMacroObj] = useState( {protien: 80, fats: 70, carbs: 80} )

  const objHandler = (obj) => { 
    setMacroObj(obj);
  };

  const newmacs = [
    {
      name: "Protien",
      value: 4,
      percent: protienState,
    },
    {
      name: "Fats",
      value: 9,
      percent: fatState,
    },
    {
      name: "Carbs",
      value: 4,
      percent: carbState,
    },
  ];



  return (
    <div className="macros">
      <MacrosDisplay name={props.name} newItems={newmacs} />
      <MacroPieChart />
      <MacrosRange
        onProtienHandler={protienHandler}
        onFatHandler={fatHandler}
        onCarbHandler={carbHandler}
        onObjTest={macroObj}
      />
    </div>
  );
};
export default MacrosDisplayBox;
