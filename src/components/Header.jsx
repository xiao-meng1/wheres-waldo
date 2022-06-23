import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/header.module.css';
import Waldo from '../assets/images/Waldo.jpeg';

function Header(props) {
  const { page } = props;

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
        <button
          type="button"
          className={page === 'Home' ? styles.active : null}
        >
          Home
        </button>
        <button
          type="button"
          className={page === 'Play' ? styles.active : null}
        >
          Play
        </button>
        <button
          type="button"
          className={page === 'Leaderboard' ? styles.active : null}
        >
          Leaderboard
        </button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  page: '',
};

Header.propTypes = {
  page: PropTypes.string,
};

export default Header;
