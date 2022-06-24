import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/header.module.css';
import waldoIMG from '../assets/images/Waldo.jpeg';

function Header(props) {
  const { page, changePage } = props;
  const handleLinkClick = (e) => {
    changePage(e.currentTarget.dataset.linkTo);
  };

  return (
    <header className={styles.header} role="navigation">
      <button
        type="button"
        onClick={handleLinkClick}
        data-link-to="Home"
        className={styles.left}
      >
        <img src={waldoIMG} alt="Waldo" />
        <h1>
          <span className={styles.blue}>Where&apos;s </span>
          <span className={styles.red}>Waldo?</span>
        </h1>
      </button>
      <div className={styles.right}>
        <button
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
        </button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  page: '',
  changePage: () => {},
};

Header.propTypes = {
  page: PropTypes.string,
  changePage: PropTypes.func,
};

export default Header;
