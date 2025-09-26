
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;

  