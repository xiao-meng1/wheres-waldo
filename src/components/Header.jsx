import React from 'react';
import styles from '../styles/header.module.css';
import Waldo from '../assets/images/Waldo.jpeg';

function Header() {
  return (
    <header className={styles.header} role="navigation">
      <button type="button" className={styles.left}>
        <img src={Waldo} alt="Waldo" />
        <h1>
          <span className={styles.blue}>Where&apos;s </span>
          <span className={styles.red}>Waldo?</span>
        </h1>
      </button>
      <div className={styles.right}>
        <button type="button">Home</button>
        <button type="button">Play</button>
        <button type="button">Leaderboard</button>
      </div>
    </header>
  );
}

export default Header;
