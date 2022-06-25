import React from 'react';
import styles from '../styles/leaderboard.module.css';

function Leaderboard() {
  return (
    <section className={styles.container}>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time &#40;seconds&#41;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>93.2</td>
          </tr>
          <tr>
            <td>John</td>
            <td>93.2</td>
          </tr>
          <tr>
            <td>John</td>
            <td>93.2</td>
          </tr>
          <tr>
            <td>John</td>
            <td>93.2</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboard;
