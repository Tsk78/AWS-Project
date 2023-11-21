// pages/index.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import about from './about';
import contact from './contact';


const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
      <a href="/about">
          <div>About</div>
        </a>
        <a href="/contact">
          <div>Contact</div>
        </a>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.homeHeader}>
        <button className={styles.hamburgerMenu} onClick={toggleSidebar}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </button>
          <div className={styles.navbar}>
            <div className={styles.loginSignupButtons}>
              <button className={styles.loginButton}>Login</button>
              <button className={styles.signupButton}>Sign-Up</button>
            </div>
          </div>
        </div>
        <div className={styles.homeContent}>
          <h1>Freelance Website</h1>
          <p>Find and apply for freelance opportunities in healthcare.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
