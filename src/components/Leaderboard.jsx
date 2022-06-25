import React from 'react';
import styles from '../styles/leaderboard.module.css';

function Leaderboard() {
  return (
    <section className={styles.container}>
      <h2>Leaderboard</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Time &#40;seconds&#41;</th>
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
        <tr>
          <td>John</td>
          <td>93.2</td>
        </tr>
      </table>
    </section>
  );
}

export default Leaderboard;
