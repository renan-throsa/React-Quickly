import { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);
  const update = (d) => setCounter((v) => v + d);
  const handleIncrement = () => update(1);
  const handleDecrement = () => update(-1);
  return {counter, handleIncrement, handleDecrement};
 }


function Counter() {
  const {counter, handleIncrement, handleDecrement} = useCounter();
  return (
    <div>
        <button onClick={handleIncrement}>
          +
        </button>
        <button onClick={handleDecrement}>
          -
        </button> 
         <p>Counter: {counter}</p>
      </div>
  );
}

export default Counter;