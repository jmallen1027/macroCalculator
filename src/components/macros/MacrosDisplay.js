import "./MacrosDisplay.css";
import MacrosItem from "./MacrosItem";

const MacroDisplay = (props) => {
  return (
    <div>
      <div className="macros-display">
        {props.newItems.map((item, index) => (
          <MacrosItem
          key={index}
            cals={props.name}
            nutrient={item.name}
            percent={item.percent}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default MacroDisplay;

/*

Make Each Macro Item (Display, Pie Chart, and Sliders the same color.)

*/