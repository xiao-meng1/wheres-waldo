import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/selector.module.css';

function Selector(props) {
  const { characters, position } = props;
  console.log(position);

  return (
    <div
      className={styles.container}
      style={{ top: `${position[1]}px`, left: `${position[0]}px` }}
    >
      {characters.map((character) => (
        <div className={styles.character} key={character.name}>
          <img src={character.src} alt={character.name} />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}

Selector.defaultProps = {
  characters: [],
  position: [],
};

Selector.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  position: PropTypes.arrayOf(PropTypes.number),
};

export default Selector;
