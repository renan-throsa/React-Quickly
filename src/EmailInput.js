import { useEffect, useState } from "react";

function EmailInput({ value }) {
  const [email, setEmail] = useState("");
  useEffect(() => setEmail(value), [value]);
  
  const style = {
    border: "1px solid dimgray",
    padding: "4px 10px",
  };

  
  return (
    <label>
      Using:
      <input
        style={style}
        type="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
    </label>
  );
}

export default EmailInput;
