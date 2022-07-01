import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';
import waldoIMG from '../assets/images/Waldo.jpeg';

function Header() {
  // const handleLinkClick = (e) => {
  //   changePage(e.currentTarget.dataset.linkTo);
  // };

  return (
    <header className={styles.header} role="navigation">
      <Link to="/" className={styles.left}>
        <img src={waldoIMG} alt="Waldo" />
        <h1>
          <span className={styles.blue}>Where&apos;s </span>
          <span className={styles.red}>Waldo?</span>
        </h1>
      </Link>
      <ul className={styles.right}>
        <li key="Home">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li key="Play">
          <NavLink
            to="play"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Play
          </NavLink>
        </li>
        <li key="Leaderboard">
          <NavLink
            to="leaderboard"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Leaderboard
          </NavLink>
        </li>

        {/* <button
          type="button"
          onClick={handleLinkClick}
          className={page === 'Home' ? styles.active : null}
          data-link-to="Home"
        >
          Home
        </button>
        <button
          type="button"
          onClick={handleLinkClick}
          className={page === 'Play' ? styles.active : null}
          data-link-to="Play"
        >
          Play
        </button>
        <button
          type="button"
          onClick={handleLinkClick}
          className={page === 'Leaderboard' ? styles.active : null}
          data-link-to="Leaderboard"
        >
          Leaderboard
        </button> */}
      </ul>
    </header>
  );
}

export default Header;
