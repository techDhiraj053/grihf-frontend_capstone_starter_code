import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!form.email.includes("@")) {
      err.email = "Valid email required";
    }
    if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Login successful!");
      // You can add backend logic here
    }
  };

  const handleLogoutClick = () => {
    alert("Logout clicked!");
    // You can replace this alert with actual logout logic if needed
  };

  return (
    <div className="container">
      {/* Visible Logout button */}
      <button
        className="btn btn-primary"
        style={{ marginBottom: "20px" }}
        onClick={handleLogoutClick}
      >
        Logout
      </button>

      <form className="login-grid" onSubmit={handleSubmit}>
        <div className="login-text">
          <h2>Login</h2>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
