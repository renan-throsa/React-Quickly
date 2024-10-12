import { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    return () => clearInterval(interval);
  });

  return <h4>Seconds: {seconds}</h4>;
}

export default Stopwatch;