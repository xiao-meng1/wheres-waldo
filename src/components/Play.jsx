/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Selector from './Selector';
import Popup from './Popup';
import styles from '../styles/play.module.css';
import waldoPortraitIMG from '../assets/images/WaldoPortrait.jpg';
import odlawPortraitIMG from '../assets/images/OdlawPortrait.jpg';
import wizardPortraitIMG from '../assets/images/WizardPortrait.jpeg';
import levelOneIMG from '../assets/images/Level1.jpg';
import levelTwoIMG from '../assets/images/Level2.jpg';
import levelThreeIMG from '../assets/images/Level3.jpg';

function Play() {
  const [level, setLevel] = useState(1);
  const [selectorActive, setSelectorActive] = useState(false);
  const [selectorPosition, setSelectorPosition] = useState([0, 0]);
  const [levelOver] = useState(true);
  const [gameOver] = useState(false);
  const getCharacters = () => {
    switch (level) {
      case 1:
        return [{ name: 'Waldo', src: waldoPortraitIMG }];
      case 2:
        return [
          { name: 'Waldo', src: waldoPortraitIMG },
          { name: 'Odlaw', src: odlawPortraitIMG },
        ];
      case 3:
        return [
          { name: 'Waldo', src: waldoPortraitIMG },
          { name: 'Odlaw', src: odlawPortraitIMG },
          { name: 'Wizard', src: wizardPortraitIMG },
        ];
      default:
        return null;
    }
  };
  const getMapImage = () => {
    switch (level) {
      case 1:
        return <img src={levelOneIMG} alt="Level One" useMap="#game-map" />;
      case 2:
        return <img src={levelTwoIMG} alt="Level Two" useMap="#game-map" />;
      case 3:
        return <img src={levelThreeIMG} alt="Level Three" useMap="#game-map" />;
      default:
        return null;
    }
  };
  const handleMapClick = (e) => {
    const bounds = e.target.getBoundingClientRect();
    const xPosition = e.clientX - bounds.left;
    const yPosition = e.clientY - bounds.top;
    setSelectorActive(true);
    setSelectorPosition([xPosition, yPosition]);
    e.stopPropagation();
  };

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
          {getCharacters().map((character) => (
            <article key={character.name}>
              <img src={character.src} alt={`${character.name}`} />
              <p>{`${character.name}`}</p>
            </article>
          ))}
        </div>
        <h2>Level {level}</h2>
        {levelOver ? (
          <button
            type="button"
            onClick={() => {
              setLevel(level + 1);
            }}
          >
            Next Level
          </button>
        ) : null}
      </header>
      <map name="game-map" onClick={handleMapClick} role="button" tabIndex={0}>
        <area shape="default" alt="default" />
      </map>
      <div className={styles['image-container']}>
        {getMapImage()}
        {selectorActive ? (
          <Selector
            characters={getCharacters()}
            position={selectorPosition}
            setSelectorActive={setSelectorActive}
          />
        ) : null}
      </div>
      {gameOver ? <Popup /> : null}
    </section>
  );
}

export default Play;
