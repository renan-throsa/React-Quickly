import { useState, useRef } from "react";
const THRESHOLD = 300;
function DoubleClickCounter() {
  const [counter, setCounter] = useState(0);
  const lastClickTime = useRef(null);

  const onClick = () => {
    const isDoubleClick = Date.now() - lastClickTime.current < THRESHOLD;
    if (isDoubleClick) {
      setCounter((value) => value + 1);
    } else {
      lastClickTime.current = Date.now();
    }
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={onClick}>Increment</button>
    </>
  );
}

export default DoubleClickCounter;
