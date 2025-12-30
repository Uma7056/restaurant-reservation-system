import { useState } from "react";
import api from "../services/api";
import "../styles.css";

export default function Register() {
  const [form, setForm] = useState({});

  const register = async () => {
    await api.post("/auth/register", form);
    alert("Registered successfully");
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" style={{ marginLeft: "8px" }} onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" style={{ marginLeft: "8px" }} placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />

      <button style={{ marginLeft: "8px" }} onClick={register}>Register</button>
    </div>
  );
}
