import { useState } from "react";

function Address() {
  const [data, setData] = useState({
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });

  function onChange({ target }) {
    const key = target.name;
    const value = target.value;

    setData((oldData) => ({ ...oldData, [key]: value }));
  }

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Address line 1:
        <input name="address1" value={data.address1} onChange={onChange} />
      </label>
      <label>
        Address line 2:
        <input name="address2" value={data.address2} onChange={onChange} />
      </label>
      <label>
        Zip:
        <input name="zip" value={data.zip} onChange={onChange} />
      </label>
      <label>
        City:
        <input name="city" value={data.city} onChange={onChange} />
      </label>
      <label>
        State:
        <input name="state" value={data.state} onChange={onChange} />
      </label>
      <label>
        Country:
        <input name="country" value={data.country} onChange={onChange} />
      </label>
    </form>
  );
}

export default Address;
