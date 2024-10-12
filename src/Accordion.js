import { useState } from "react";
function Accordion() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <h4 style={{ display: "flex", gap: "6px" }}>
        Secret password
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "-" : "+"}
        </button>
        
      </h4>
      {isExpanded && (
        <p>
          Password: <code>hunter2</code>.
        </p>
      )}
    </>
  );
}

export default Accordion;
