import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // Check if password and confirm password match
      if (password !== confirmPassword) {
        setMessage('Passwords do not match');
        return;
      }

      const response = await Axios.post('http://localhost:8000/signup', {
        email,
        password,
      });

      setMessage(response.data.message);

      if (response.status === 200) {
        // Signup successful, redirect to the navbar
        navigate('/navbar');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="container">
      <h1>Sign Up Page</h1>
      <label>Email:</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <br />
      <label>Confirm Password:</label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input-field"
      />
      <br />
      <button onClick={handleSignup} className="btn">
        Sign Up
      </button>
      <p>
        Already have an account? <a href="/">Log in</a>
      </p>
      <p>{message}</p>
    </div>
  );
}

export default Signup;
