import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';

function Home(props) {
  const { changePage } = props;
  const handleLinkClick = () => {
    changePage('Play');
  };

  return (
    <div className={styles.container}>
      <section>
        <h2>Are you a Waldo expert?</h2>
        <button type="button" onClick={handleLinkClick}>
          Play now
        </button>
      </section>
      <article>
        <h3>Instructions:</h3>
        <p>
          Click on Waldo in each of the 3 levels. Finish fast to get a high
          score on the leaderboard!
        </p>
      </article>
    </div>
  );
}

Home.defaultProps = {
  changePage: () => {},
};

Home.propTypes = {
  changePage: PropTypes.func,
};

export default Home;
