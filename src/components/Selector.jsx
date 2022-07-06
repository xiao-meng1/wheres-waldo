import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/selector.module.css';

export default function Selector(props) {
  const {
    characters,
    xPosition,
    xPositionRelative,
    yPosition,
    yPositionRelative,
    handleGuess,
    setSelectorActive,
  } = props;
  const handleButtonClick = (e) => {
    const characterName = e.currentTarget.id;

    handleGuess(characterName, xPositionRelative, yPositionRelative);
    setSelectorActive(false);
    e.stopPropagation();
  };

  return (
    <div
      className={styles.container}
      style={{ top: `${yPosition}px`, left: `${xPosition}px` }}
    >
      {characters.map((character) => (
        <button
          type="button"
          className={styles.character}
          id={character.name}
          key={character.name}
          onClick={handleButtonClick}
        >
          <img src={character.src} alt={character.name} />
          <p>{character.name}</p>
        </button>
      ))}
    </div>
  );
}

Selector.defaultProps = {
  characters: [],
  xPosition: 0,
  xPositionRelative: 0,
  yPosition: 0,
  yPositionRelative: 0,
  handleGuess: () => {},
  setSelectorActive: () => {},
};

Selector.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  xPosition: PropTypes.number,
  xPositionRelative: PropTypes.number,
  yPosition: PropTypes.number,
  yPositionRelative: PropTypes.number,
  handleGuess: PropTypes.func,
  setSelectorActive: PropTypes.func,
};
