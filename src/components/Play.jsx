/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect, useState, useRef } from 'react';
import Selector from './Selector';
import Popup from './Popup';
import styles from '../styles/play.module.css';
import waldoPortraitIMG from '../assets/images/WaldoPortrait.jpg';
import odlawPortraitIMG from '../assets/images/OdlawPortrait.jpg';
import wizardPortraitIMG from '../assets/images/WizardPortrait.jpeg';
import levelOneIMG from '../assets/images/Level1.jpg';
import levelTwoIMG from '../assets/images/Level2.jpg';
import levelThreeIMG from '../assets/images/Level3.jpg';
import characterLocations from '../data/characterLocations.json';

function Play() {
  const [level, setLevel] = useState(1);
  const [activeCharacters, setActiveCharacters] = useState([]);
  const [selectorActive, setSelectorActive] = useState(false);
  const [selectorPosition, setSelectorPosition] = useState([0, 0]);
  const [levelActive, setLevelActive] = useState(false);
  const [levelOver, setLevelOver] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [levelStartTimestamps, setLevelStartTimestamps] = useState([]);
  const [levelEndTimestamps, setLevelEndTimestamps] = useState([]);
  const isFirstRender = useRef(true);

  const handleMapClick = (e) => {
    const bounds = e.target.getBoundingClientRect();
    const xPosition = e.clientX - bounds.left;
    const xPositionRelative =
      (e.clientX - bounds.left) / (bounds.right - bounds.left);
    const yPosition = e.clientY - bounds.top;
    const yPositionRelative =
      (e.clientY - bounds.top) / (bounds.bottom - bounds.top);
    setSelectorActive(true);
    setSelectorPosition([
      [xPosition, xPositionRelative],
      [yPosition, yPositionRelative],
    ]);
    e.stopPropagation();
  };
  const getMapImage = () => {
    switch (level) {
      case 1:
        return (
          <img
            src={levelOneIMG}
            alt="Level One"
            useMap="#game-map"
            onClick={handleMapClick}
            onLoad={() => {
              setLevelActive(true);
            }}
          />
        );
      case 2:
        return (
          <img
            src={levelTwoIMG}
            alt="Level Two"
            useMap="#game-map"
            onClick={handleMapClick}
            onLoad={() => {
              setLevelActive(true);
            }}
          />
        );
      case 3:
        return (
          <img
            src={levelThreeIMG}
            alt="Level Three"
            useMap="#game-map"
            onClick={handleMapClick}
            onLoad={() => {
              setLevelActive(true);
            }}
          />
        );
      default:
        return null;
    }
  };
  const handleGuess = (characterName, xLocationRelative, yLocationRelative) => {
    const levelData = characterLocations.find((data) => data.level === level);
    const characterData = levelData.characters[characterName];
    const guessCorrect =
      xLocationRelative > characterData.xMinRelative &&
      xLocationRelative < characterData.xMaxRelative &&
      yLocationRelative > characterData.yMinRelative &&
      yLocationRelative < characterData.yMaxRelative;

    if (!guessCorrect) {
      return;
    }

    setActiveCharacters(
      activeCharacters.filter((character) => character.name !== characterName)
    );

    if (activeCharacters.length === 1) {
      setLevelActive(false);

      if (level === 3) {
        setGameOver(true);

        return;
      }

      setLevelOver(true);
    }
  };
  const handleNextLevelButton = () => {
    setLevelOver(false);
    setLevel(level + 1);
  };
  const getTotalTime = () => {
    let totalTime = 0;

    for (let i = 0; i < levelStartTimestamps.length; i += 1) {
      totalTime += (levelEndTimestamps[i] - levelStartTimestamps[i]) / 1000;
    }

    return Number.parseFloat(totalTime.toFixed(1));
  };

  useEffect(() => {
    switch (level) {
      case 1:
        setActiveCharacters([{ name: 'Waldo', src: waldoPortraitIMG }]);
        break;
      case 2:
        setActiveCharacters([
          { name: 'Waldo', src: waldoPortraitIMG },
          { name: 'Odlaw', src: odlawPortraitIMG },
        ]);
        break;
      case 3:
        setActiveCharacters([
          { name: 'Waldo', src: waldoPortraitIMG },
          { name: 'Odlaw', src: odlawPortraitIMG },
          { name: 'Wizard', src: wizardPortraitIMG },
        ]);
        break;
      default:
    }
  }, [level]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    if (levelActive) {
      setLevelStartTimestamps((state) => [...state, Date.now()]);
    } else {
      setLevelEndTimestamps((state) => [...state, Date.now()]);
    }
  }, [levelActive]);

  return (
    <section
      className={styles.container}
      onClick={() => {
        setSelectorActive(false);
      }}
      role="button"
      tabIndex={0}
    >
      <header>
        <div className={styles.portraits}>
          {activeCharacters.map((character) => (
            <article key={character.name}>
              <img src={character.src} alt={`${character.name}`} />
              <p>{`${character.name}`}</p>
            </article>
          ))}
        </div>
        <h2>Level {level}</h2>
        {levelOver ? (
          <button type="button" onClick={handleNextLevelButton}>
            Next Level
          </button>
        ) : null}
      </header>
      <div className={styles['image-container']}>
        {getMapImage()}
        {selectorActive ? (
          <Selector
            characters={activeCharacters}
            xPosition={selectorPosition[0][0]}
            xPositionRelative={selectorPosition[0][1]}
            yPosition={selectorPosition[1][0]}
            yPositionRelative={selectorPosition[1][1]}
            handleGuess={handleGuess}
            setSelectorActive={setSelectorActive}
          />
        ) : null}
      </div>
      {gameOver ? <Popup totalTime={getTotalTime()} /> : null}
    </section>
  );
}

export default Play;
