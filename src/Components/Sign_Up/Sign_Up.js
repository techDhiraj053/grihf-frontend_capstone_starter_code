import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState('');
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, password }),
      });

      const json = await response.json();

      if (json.authtoken) {
        sessionStorage.setItem('auth-token', json.authtoken);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('phone', phone);
        sessionStorage.setItem('email', email);

        navigate('/');
        window.location.reload();
      } else {
        if (json.errors) {
          setShowerr(json.errors[0].msg); // Show only the first validation error
        } else {
          setShowerr(json.error || 'Registration failed');
        }
      }
    } catch (error) {
      setShowerr('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <form onSubmit={register}>
        {/* Name input */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        {/* Phone input */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            name="phone"
            id="phone"
            className="form-control"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        {/* Password input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        {/* Error message */}
        {showerr && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{showerr}</div>
        )}

        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
