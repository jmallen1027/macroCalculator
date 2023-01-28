import "./Meals.css"
import MealsForm from "./MealsForm";

const menu = [
  {
    id: 1,
    food: "Broccoli",
    serving: 85,
    calories: 50,
    carbs: 4,
    protien: 3,
    fat: 0,
  },
  {
    id: 2,
    food: "Chicken Breast",
    serving: 112,
    calories: 110,
    carbs: 0,
    protien: 26,
    fat: 0,
  },
  {
    id: 3,
    food: "Sweet Potato",
    serving: 130,
    calories: 110,
    carbs: 26,
    protien: 2,
    fat: 0,
  },
  {
    id: 4,
    food: "Rib Eye Steak",
    serving: 112,
    calories: 290,
    carbs: 0,
    protien: 21,
    fat: 23,
  },
  {
    id: 5,
    food: "Brown Rice",
    serving: 45,
    calories: 170,
    carbs: 34,
    protien: 3,
    fat: 2,
  },
];

const Meals = (props) => {
  console.log("Meals");
  console.log(menu);

  return (
    <div className="meal-container">
    <MealsForm />

      {menu.map((item) => (
        <div className="food-item">
          <br></br>
          <div>{item.food} </div>
          <div>Serving Size: {item.serving} G </div>
          <div>Calories: {item.calories} Kcals </div>
          <div>Protien: {item.protien} G </div>
          <div>Fat: {item.fat} G  </div>
          <div>Carbs: {item.carbs}G  </div>
        </div>
      ))}

    </div>
  );
};

export default Meals;
