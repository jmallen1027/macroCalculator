import './MacroItem.css'

const MacrosItem = (props) => {
    console.log('Rendering MacrosItem')
  return (
    
    <div className='macro-item'>
      <h2>{props.nutrient}</h2>
      <div>{Math.round(props.cals * props.percent)} Kcal</div>
      <div>{Math.round(props.cals * (props.percent / props.value))} G</div>
    </div>
  );
};

export default MacrosItem;
