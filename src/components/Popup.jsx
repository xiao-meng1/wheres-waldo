import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addUserTimeResult } from '../firebase/firebase';
import styles from '../styles/popup.module.css';

function Popup(props) {
  const { totalTime, changePage } = props;
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addUserTimeResult(inputValue, totalTime);
    changePage('Leaderboard');
  };

  return (
    <>
      <div className={styles.blocker} />
      <div className={styles.popup}>
        <h3>Congratulations!</h3>
        <p>Your total time was: {totalTime} s</p>
        <p>Please enter your name to get on the leaderboard</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            maxLength={20}
            placeholder="name"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

Popup.defaultProps = {
  totalTime: 0,
  changePage: () => {},
};

Popup.propTypes = {
  totalTime: PropTypes.number,
  changePage: PropTypes.func,
};

export default Popup;
