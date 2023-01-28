import React, { useState } from "react";
import MacrosRange from "./MacrosRange";
import MacrosDisplay from "./MacrosDisplay";

import './Macros.css';
const MacrosDisplayBox = (props) => {
  console.log("Rendering Macros Main");

  const macros = [
    {
      name: "Protien",
      value: 4,
      percent: 0.3,
    },
    {
      name: "Fats",
      value: 9,
      percent: 0.4,
    },
    {
      name: "Carbs",
      value: 4,
      percent: 0.3,
    },
  ];

  const [macroPercent, setMacroPercent] = useState(macros);
  const [displayState, setDisplayState] = useState("True");

  const setMacros = (macs) => {
    setMacroPercent(macs);
  };

  const editMacros = (edit) => {
    setDisplayState(edit);
  };

  const displayMacros = (show) => {
    setDisplayState(show);
  };

  if (displayState === "True") {
    return (
     <div >
      <MacrosDisplay 
        
        name={props.name}
        onDisplayMacros={displayMacros}
        newItems={macroPercent}
      />
    </div>
    );
  } else if (displayState === "False") {
    return (
      <div>
      <MacrosDisplay 
        
      name={props.name}
      onDisplayMacros={displayMacros}
      newItems={macroPercent}
    />
  
      <MacrosRange
        onEditMacros={editMacros}
        onMacros={macroPercent}
        onTheseMacros={setMacros}
      />
      </div>
    );
  }
};
export default MacrosDisplayBox;
