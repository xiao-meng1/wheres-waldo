import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Play from './components/Play';
import Leaderboard from './components/Leaderboard';
import styles from './styles/app.module.css';

function App() {
  const [page, setPage] = useState('Home');
  const changePage = (newPage) => {
    setPage(newPage);
  };
  const renderContent = () => {
    let content;

    if (page === 'Home') {
      content = <Home changePage={changePage} />;
    } else if (page === 'Play') {
      content = <Play />;
    } else if (page === 'Leaderboard') {
      content = <Leaderboard />;
    } else {
      content = null;
    }

    return content;
  };

  return (
    <div className={styles.app}>
      <Header page={page} changePage={changePage} />
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;
