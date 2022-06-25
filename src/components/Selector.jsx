import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/selector.module.css';

function Selector(props) {
  const { characters, position, setSelectorActive } = props;
  const handleButtonClick = (e) => {
    setSelectorActive(false);
    e.stopPropagation();
  };

  return (
    <div
      className={styles.container}
      style={{ top: `${position[1]}px`, left: `${position[0]}px` }}
    >
      {characters.map((character) => (
        <button
          type="button"
          className={styles.character}
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
  position: [],
  setSelectorActive: () => {},
};

Selector.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  position: PropTypes.arrayOf(PropTypes.number),
  setSelectorActive: PropTypes.func,
};

export default Selector;
