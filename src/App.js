import { useState } from "react";
import Menu from "./Menu";
import Accordion from "./Accordion";
import TodoApplication from "./TodoApplication";
import Dropdown from "./Dropdown";
import Stopwatch from "./Stopwatch";
import EmailInput from "./EmailInput";
import Countdown from "./Countdown";
import Sum from "./Sum";
import HexColor from "./HexColor";
import TicketNumber from "./TicketNumber";
import Address from "./Address";
import DoubleClickCounter from "./DoubleClickCounter";
import Dashboard from "./Dashboard";
import AdminDashboard from "./AdminDashboard";
import Counter from "./Counter";
import Loader from "./Loader";

import "./App.css";

function App() {
  const EMAIL1 = "daffyduck@looneytunes.invalid";
  const EMAIL2 = "bugsbunny@looneytunes.invalid";
  const EMAIL3 = "elmerfudd@looneytunes.invalid";

  const [showWatch, setShowWatch] = useState(false);
  const [defaultEmail, setDefaultEmail] = useState(EMAIL1);

  const style = {
    background: showWatch ? "dimgray" : "transparent",
    color: showWatch ? "white" : "dimgray",
    padding: "4px 10px",
    border: "1px solid dimgray",
  };

  const items = [
    { task: "Feed the plants", done: false, index: 0 },
    { task: "Water the dishes", done: false, index: 1 },
    { task: "Clean the cat", done: false, index: 2 },
    { task: "Vacuum the house", done: true, index: 3 },
  ];

  return (
    <main>
      <Menu />

      <details>
        <summary>5 - Making React interactive with states</summary>
        <div className="details__content">
          <Accordion />
          <TodoApplication initialList={items} />
          <Dropdown />
        </div>
      </details>

      <details>
        <summary>6 - Effects and the React component life cycle</summary>

        <div className="details__content">
          <button style={style} onClick={() => setShowWatch((b) => !b)}>
            Toggle watch
          </button>
          {showWatch && <Stopwatch />}
        </div>

        <div className="details__content">
          <ul className="menu">
            <li>
              <button onClick={() => setDefaultEmail(EMAIL1)}>
                Use {EMAIL1}
              </button>
            </li>
            <li>
              <button onClick={() => setDefaultEmail(EMAIL2)}>
                Use {EMAIL2}
              </button>
            </li>
            <li>
              <button onClick={() => setDefaultEmail(EMAIL3)}>
                Use {EMAIL3}
              </button>
            </li>
            <li>
              <EmailInput value={defaultEmail} />
            </li>
          </ul>
        </div>

        <div className="details__content">
          <Countdown from={10} />
        </div>
      </details>

      <details>
        <summary>7 - Hooks to fuel your web applications</summary>
        <div className="details__content">
          <DoubleClickCounter />
        </div>
      </details>

      <details>
        <summary>8 - Handling events in React</summary>
        <div className="details__content"></div>
      </details>

      <details>
        <summary>9 - Working with forms in React</summary>
        <div className="details__content">
          <Sum />
          <HexColor />
          <TicketNumber />
          <Address />
        </div>
      </details>

      <details>
        <summary>10 - Advanced React hooks for scaling</summary>
        <div className="details__content">
          <Dashboard name="Alice" />
          <AdminDashboard />
          <Counter />
          
        </div>
        <div className="details__content">
        <Loader />
        </div>
      </details>
    </main>
  );
}

export default App;
