import { useState, useEffect } from "react";

function Dropdown() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch("//www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => data.results)
      .then((characters) => characters.map(({ name }) => name))
      .then((names) => setOptions(names));
  },[]);

  const Style = {
    border: "1px solid dimgray",
    padding: "4px 10px",
  };

  return (
    <select style={Style} id="remoteDropdown">
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

export default Dropdown;