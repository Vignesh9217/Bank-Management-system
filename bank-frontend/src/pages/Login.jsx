import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();

        // Save user info
        localStorage.setItem("user", JSON.stringify(data));

        // Go to dashboard
        navigate("/dashboard");
      } else {
        setMessage("Invalid username or password");
      }
    } catch (error) {
      setMessage("Server error");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Bank Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn">
          Login
        </button>

        {message && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;