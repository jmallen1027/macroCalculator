import "./MacroNutrient.css";

const MacroNutrient = (props) => {
  console.log(props)
  return (
    
      <div className="macro-box">
        <div className="macro-description">{props.macro}</div>
        <div className="macro-description">{props.grams}g</div>
        <div className="macro-description">{props.percent}%</div>
        <div className="macro-description">{props.calories}Kcals</div>
      </div>

  );
};

export default MacroNutrient;
