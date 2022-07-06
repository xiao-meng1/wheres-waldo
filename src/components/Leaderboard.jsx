import React, { useState, useEffect } from 'react';
import { getUserTimeResults } from '../firebase/firebase';
import styles from '../styles/leaderboard.module.css';

export default function Leaderboard() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [resultsData, setResultsData] = useState([]);

  useEffect(() => {
    (async () => {
      const newData = await getUserTimeResults();
      setResultsData(newData);
      setIsDataLoaded(true);
    })();
  }, []);

  return (
    <section className={styles.container}>
      <h2>Leaderboard</h2>
      {isDataLoaded ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time &#40;seconds&#41;</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
