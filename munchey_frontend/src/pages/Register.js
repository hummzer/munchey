import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";  // Import useNavigate for page redirection

const Register = () => {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    phone: "", // Added phone number
    password: "",
  });
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", { // Note the trailing slash here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || "Registration Successful!");
        navigate("/login"); // Redirect to the login page after successful registration
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="register-container" style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate("/login")}>Login</button> {/* Login button */}
    </div>
  );
};

export default Register;

