import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LetterGuess } from './Letter.styles';
import MyContext from '../../context/MyContext';

function Letter({ parentRowNumber, letterNumber }) {
  const { actualRowCoord, changeRowCoord, Rows } = useContext(MyContext);

  const handleClick = () => {
    changeRowCoord(letterNumber);
  };

  return (
    <LetterGuess
      isActual={actualRowCoord[0] === parentRowNumber && actualRowCoord[1] === letterNumber}
      onClick={handleClick}
    >
      {Rows[parentRowNumber][letterNumber]}
    </LetterGuess>
  );
}

Letter.proTypes = {
  parentRowNumber: PropTypes.number.isRequired,
  letterNumber: PropTypes.number.isRequired,
};

export default Letter;
