import "./Macros.css";
import "./MacrosDisplay.css";
import MacrosItem from "./MacrosItem";
const MacroDisplay = (props) => {
  console.log("Rendering  Display");
  const displayMacros = (event) => {
    event.preventDefault();
    props.onDisplayMacros(event.target.value);
  };



  return (
    <div >
    
      <div className="macros">
        {props.newItems.map((item) => (
          <MacrosItem 
            cals={props.name}
            nutrient={item.name}
            percent={item.percent}
            value={item.value}
          />
        ))}
        </div>
      <div className="macros-button">
      <button className="macros-button" onClick={displayMacros} value="False">
        Update Macros
      </button>
      </div>
    </div>
  );
};

export default MacroDisplay;
