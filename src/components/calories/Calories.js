import CaloriesDisplay from "./CaloriesDisplay";
import CaloriesForm from "./CaloriesForm";

const Calories = (props) => {
  console.log("Rendering Calories Main")
  
  const newCalories = (newCals) => {
    props.onChangeCalories(newCals);
  };

  const enterCalories = (enter) => {
    props.onChoice(enter);
  };

  const chooseCalories = (choice) => {
    props.onChoice(choice);
  };
  console.log(props.name)
    return (
      <div>
     
        <h1>{props.name}</h1>
        <CaloriesForm 
          onNewCalories={newCalories}
          onEnteredCalories={enterCalories}
        />
        </div>
   
    );
  

};

export default Calories;
