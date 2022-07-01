import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h2>Are you a Waldo expert?</h2>
        <Link to="play">Play now</Link>
      </section>
      <article>
        <h3>Instructions:</h3>
        <p>Click on Waldo and his friends in each of the 3 levels.</p>
        <p>Finish fast to get a high score on the leaderboard!</p>
      </article>
    </div>
  );
}

export default Home;
