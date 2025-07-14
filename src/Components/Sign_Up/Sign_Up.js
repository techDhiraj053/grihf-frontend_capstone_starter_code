import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config'; // Make sure this is correctly set to http://localhost:5000

function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
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

      if (response.ok) {
        // ✅ Registration success
        sessionStorage.setItem('auth-token', json.authtoken || 'dummy-token');
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('phone', phone);
        sessionStorage.setItem('email', email);

        navigate('/');
        window.location.reload();
      } else {
        // ❌ Backend validation or other error
        const msg = json.errors?.[0]?.msg || json.error || 'Registration failed';
        setErrorMsg(msg);
      }
    } catch (err) {
      setErrorMsg('🚫 Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <form onSubmit={register}>
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
            required
          />
        </div>

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
            required
          />
        </div>

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
            required
          />
        </div>

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
            required
          />
        </div>

        {errorMsg && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{errorMsg}</div>
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
