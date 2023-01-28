const CaloriesButton = (props) => {
  console.log("Rendering Calories Button");
  const changeCalories = (event) => {

    props.onAddCalories(props.name + Number(event.target.value));
  };
  return (
    <div>
          <button value="500" onClick={changeCalories}>
      Change Calories
    </button>
    </div>

  );
};

export default CaloriesButton;
