import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/popup.module.css';

function Popup(props) {
  const { time } = props;

  return (
    <>
      <div className={styles.blocker} />
      <div className={styles.popup}>
        <h3>Congratulations!</h3>
        <p>Your total time was: {time}s</p>
        <p>Please enter your name to get on the leaderboard</p>
        <input type="text" />
      </div>
    </>
  );
}

Popup.defaultProps = {
  time: '',
};

Popup.propTypes = {
  time: PropTypes.string,
};

export default Popup;
