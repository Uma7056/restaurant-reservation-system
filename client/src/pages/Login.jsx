import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      res.data.role === "ADMIN" ? navigate("/admin") : navigate("/book");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <input
        type="password"
        style={{ marginLeft: "8px" }}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={{ marginLeft: "8px" }} onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
