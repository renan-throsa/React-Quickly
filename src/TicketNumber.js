import { useState } from "react";
function TicketNumber() {
  const [ticketNumber, setTicketNumber] = useState("");
  const onChange = ({ target: { value } }) => {
    const [first = "", second = ""] = value
      .replace(/[^0-9a-z]/gi, "")
      .slice(0, 6)
      .match(/.{3}/g);
    const input = first.length === 3 ? `${first}-${second}` : first;
    setTicketNumber(input.toUpperCase());
  };
  const isValid = ticketNumber.length === 7;
  return (
    <form style={{ display: "flex" }}>
      <label>
        Ticket number:
        <input
          value={ticketNumber}
          onChange={onChange}
          placeholder="E.g. R1S-T2U"
        />
      </label>
      <span>{isValid ? "✓" : "✗"}</span>
    </form>
  );
}

export default TicketNumber;
