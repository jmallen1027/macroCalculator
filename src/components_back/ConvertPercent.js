import React, { useState } from "react";

const ConvertPercent = (props) => {
  const [enteredPercent, setPercent] = useState(10)
  const percentHandler = (event) => {
    setPercent(event)
    props.onSetPercent(event)
  }

  return (
    <div className="new-expense__control">
      <label>Convert</label>
      <input type="number" min="10" max="100" onChange={percentHandler}/>
    </div>
  );
};

export default ConvertPercent;
