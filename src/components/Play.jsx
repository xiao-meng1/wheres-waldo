import React, { useState } from 'react';
import styles from '../styles/play.module.css';
import waldoPortraitIMG from '../assets/images/WaldoPortrait.jpg';
import odlawPortraitIMG from '../assets/images/OdlawPortrait.jpg';
import wizardPortraitIMG from '../assets/images/WizardPortrait.jpeg';
import levelOneIMG from '../assets/images/Level1.jpg';
import levelTwoIMG from '../assets/images/Level2.jpg';
import levelThreeIMG from '../assets/images/Level3.jpg';

function Play() {
  const [level] = useState(1);
  const renderPortraits = () => {
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
  const renderMap = () => {
    switch (level) {
      case 1:
        return <img src={levelOneIMG} alt="Level One" />;
      case 2:
        return <img src={levelTwoIMG} alt="Level Two" />;
      case 3:
        return <img src={levelThreeIMG} alt="Level Three" />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.container}>
      <header>
        <div className={styles.portraits}>
          {renderPortraits().map((portrait) => (
            <article>
              <img src={portrait.src} alt={`${portrait.name} portrait`} />
              <p>{`${portrait.name}`}</p>
            </article>
          ))}
        </div>
        <h2>Level {level}</h2>
        <button type="button">Next Level</button>
      </header>
      {renderMap()}
    </section>
  );
}

export default Play;
