import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Play from './components/Play';
import Leaderboard from './components/Leaderboard';
import styles from './styles/app.module.css';

export default function App() {
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
