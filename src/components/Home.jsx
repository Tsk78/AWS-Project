// Home.jsx
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add  form submission logic here
    if (password !== passwordRepeat) {
      alert('Passwords do not match!');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <div className="form-group">
        <label htmlFor="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          required
        />
      </div>
      <hr />

      <p>By creating an account, you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button type="submit" className="registerbtn">Register</button>

      <div className="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  );
};

export default Home;