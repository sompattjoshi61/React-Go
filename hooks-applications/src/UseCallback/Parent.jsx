import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const fun= useCallback(()=>{
    console.log("fun")
  },counterTwo);
  //re-Render only when counterTwo changes
  

  return (
    <div>
      <Child/>
      <button onClick={incrementOne}>Counter - {counterOne}</button>
    </div>

    //If we click on counter 1 button child component will also render which is not good
  );
}

export default Parent;
