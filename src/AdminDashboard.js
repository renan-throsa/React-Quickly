import { useState } from "react";

import Dashboard from "./Dashboard";

function AdminDashboard() {
    const [user, setUser] = useState("Alice");
    return (
      <>
        <select value={user} onChange={(evt) => setUser(evt.target.value)}>
          <option>Alice</option>
          <option>Bob</option>
          <option>Carol</option>
          <option>David</option>
        </select>
        <Dashboard name={user} />
      </>
    );
  }

  export default AdminDashboard;