import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Play from './components/Play';
import Leaderboard from './components/Leaderboard';
import styles from './styles/app.module.css';

function App() {
  // const [page, setPage] = useState('Home');
  // const changePage = (newPage) => {
  //   setPage(newPage);
  // };
  // const renderContent = () => {
  //   switch (page) {
  //     case 'Home':
  //       return <Home changePage={changePage} />;
  //     case 'Play':
  //       return <Play changePage={changePage} />;
  //     case 'Leaderboard':
  //       return <Leaderboard />;
  //     default:
  //       return null;
  //   }
  // };

  /* <div className={styles.app}>
      <Header page={page} changePage={changePage} />
      <main>{renderContent()}</main>
    </div> */

  return (
    <BrowserRouter>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="play" element={<Play />} />
            <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
