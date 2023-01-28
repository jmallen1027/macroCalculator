const CaloriesDisplay = (props) => {
  console.log("Rendering Calories Display");
  const newCalories = (event) => {
    props.onAddCalories(event.target.value);
  };
  return (
    <div>
      <button value="True" onClick={newCalories}>
        Change Calories
      </button>
    </div>
  );
};

export default CaloriesDisplay;
