import React, { useState } from "react";
import "./Sign_Up.css";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) {
      err.name = "Name is required";
    }
    if (!/^\d{10}$/.test(form.phone)) {
      err.phone = "Phone number must be 10 digits";
    }
    if (!form.email.includes("@")) {
      err.email = "Valid email required";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Sign up successful!");
      // You can add backend API call here
    }
  };

  return (
    <div className="container">
      <form className="signup-grid" onSubmit={handleSubmit}>
        <div className="signup-text">
          <h2>Sign Up</h2>
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter 10-digit phone number"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
