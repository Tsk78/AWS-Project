// Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="home-header">
          <div className="navbar">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
        <div className="home-content">
          <h2>Welcome to the Nurse Freelance Website</h2>
          <p>Find and apply for freelance nursing jobs.</p>
          <p>Discover opportunities and connect with healthcare facilities.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;