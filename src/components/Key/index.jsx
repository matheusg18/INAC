import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../../context/MyContext';
import { KeyButton } from './Key.styles';

function Key({ value }) {
  const { actualRowCoord, changeRowCoord, Rows, setRowLetter } = useContext(MyContext);

  const handleClick = (value) => {
    const canTypeLetter = actualRowCoord[1] < 5;

    if (canTypeLetter && value !== 'backspace' && value !== 'enter') {
      setRowLetter(value);
      changeRowCoord(actualRowCoord[1] + 1);
    }

    if (value === 'backspace') handleBackspaceClick();
    if (value === 'enter') handleEnterClick();
  };

  const handleEnterClick = () => {
    // verifica se tem as o letras
    // verifica se é uma palavra válida
    // verifica quantas letras estão certas
  };

  const handleBackspaceClick = () => {
    const actualLetter = Rows[actualRowCoord[0]][actualRowCoord[1]];

    if (actualLetter) {
      setRowLetter('');
    } else if (actualRowCoord[1] > 0) {
      setRowLetter('', actualRowCoord[1] - 1);
      changeRowCoord(actualRowCoord[1] - 1);
    }
  };

  return <KeyButton onClick={() => handleClick(value)}>{value}</KeyButton>;
}

const validValues = 'qwertyuiopasdfghjklzxcvbnm'.split('').concat('enter', 'backspace');

Key.propTypes = {
  value: PropTypes.oneOf(validValues).isRequired,
};

export default Key;
