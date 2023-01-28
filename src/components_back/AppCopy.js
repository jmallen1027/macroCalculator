import React, { useState } from "react";
import Macros from "./Macros";
import Calories from "./Calories";
import ConvertPercent from "./ConvertPercent"
import MacroForm from "./macroForms/MacroForm";

function App() {
  const nutrition = [
    {
      'macro': 'Protien',
      'grams': 225,
      'percent': 30,
      'calories': 900
    },
    {
      'macro': 'Carbs',
      'grams': 225,
      'percent': 30,
      'calories': 900
    },
    {
      'macro': 'Fats',
      'grams': 133,
      'percent': 40,
      'calories': 1200
    }
  ]

const [protienPerc, setProtienPerc] = useState(nutrition[0].percent)



  const handledPercent = (protienPerc) => {
    setProtienPerc((prevPerc) => {
      return nutrition[0].percent = protienPerc
    })
  }

  const macroFormHandler = (mac) => {
    console.log(mac)
  }
  return (
    <div>
      <Calories />
      <MacroForm onCalorieSetter={macroFormHandler} />
      <Macros items={nutrition}/>
      <ConvertPercent onSetPercent={handledPercent}/>

    </div>
  );
}

export default App;
