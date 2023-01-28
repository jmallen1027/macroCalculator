import './MacroItem.css'

const MacrosItem = (props) => {
    console.log('Rendering MacrosItem')
    console.log(props.cals, props.percent, props.value)
    
  return (
    
    <div className='macro-item'>
      <h2>{props.nutrient}</h2>
      <div>{Math.round(props.cals * (props.percent / 100))} Kcal</div>
      <div>{Math.round(props.cals * ((props.percent / 100) / props.value))} G</div>
      <div>{props.percent }%</div>
    </div>
  );
};

export default MacrosItem;
