import api from "./services/api";

function Login() {
  const login = async () => {
    const res = await api.post("/auth/login", {
      email: "test@test.com",
      password: "123456"
    });
    localStorage.setItem("token", res.data.token);
  };

  return <button className="text-black" onClick={login}>Login</button>;
}