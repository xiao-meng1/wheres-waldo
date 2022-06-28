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
    switch (page) {
      case 'Home':
        return <Home changePage={changePage} />;
      case 'Play':
        return <Play changePage={changePage} />;
      case 'Leaderboard':
        return <Leaderboard />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.app}>
      <Header page={page} changePage={changePage} />
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;
