import { useEffect, useState } from "react";

function Countdown({ from }) {
  const [seconds, setSeconds] = useState(from);
  const [isRunning, setRunning] = useState(false);

  const onSetSecondsState = (value) => {
    if (value <= 1) {
      setRunning(false);
    }
    return value - 1;
  };

  const onSetRunningState = (v) => !v;

  const style = {
    background: "dimgray",
    color: "white",
    padding: "4px 10px",
    border: "1px solid dimgray",
  };

  useEffect(() => {
    console.log("verificando");
    if (!isRunning) {
      return;
    }    
    const interval = setInterval(() => setSeconds(onSetSecondsState), 1000);
    return () => {
      console.log("parando");
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <section>
      <h4>Countdown | Time left: {seconds} seconds</h4>
      <button style={style} onClick={() => setSeconds(from)}>
        Reset
      </button>

      <button
        style={style}
        onClick={() => setRunning(onSetRunningState)}
        disabled={seconds === 0}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </section>
  );
}

export default Countdown;
