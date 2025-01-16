import React, { useState } from "react";
import API from "../api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("token/", { username, password });
      localStorage.setItem("access", response.data.access );
      localStorage.setItem("refresh", response.data.refresh );
      window.location.href = "/dashboard"; //Redirect after login
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
  <div style={{ padding: "20px", maxwidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChane={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
  </div>
  );
};

export default Login;
