import React, { useState } from "react";
import CaloriesForm from "./components/calories/CaloriesForm";
import "./components/calories/Calories.css";
import Macros from "./components/macros/Macros";
import "./Display.css"





import BmrCalculator from "./components/bmrCalculator/BmrCalculator";

const App = () => {


  const [calories, setCalories] = useState(0);

  const changeCalorieHandler = (updatedCalories) => {
    setCalories(updatedCalories);
  };

  console.log("Rendering App");
  console.log(calories);
  return (
    <div>
      <BmrCalculator onSetCalories={changeCalorieHandler}/>
      <h1 className="calories">{calories}</h1>
      <CaloriesForm

      
        onChangeCalories={changeCalorieHandler}
      />
      
   
        <Macros name={calories} />

    </div>
    
  );
};

export default App;
