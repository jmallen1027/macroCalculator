import "./Macros.css";
import MacroNutrient from "./MacroNutrient";
const Macros = (props) => {
  console.log(props);
  return (
    <div className="macro-container">
      {props.items.map((item) => (
        <MacroNutrient
          macro={item.macro}
          grams={item.grams}
          percent={item.percent}
          calories={item.calories}
        />
      ))}
    </div>
  );
};

export default Macros;
