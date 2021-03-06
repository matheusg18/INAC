import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BsBackspace } from 'react-icons/bs';
import MyContext from '../../context/MyContext';
import { KeyButton } from './Key.styles';
import validGuesses from '../../words/validGuesses';

function Key({ value }) {
  const { actualRowCoord, answer, changeRowCoord, goToNextRow, Rows, setRowLetter, setRowState } =
    useContext(MyContext);

  const handleClick = (event, value) => {
    event.target.blur();
    const canTypeLetter = actualRowCoord[1] < 5;

    if (canTypeLetter && value !== 'backspace' && value !== 'enter') {
      setRowLetter(value);
      changeRowCoord(actualRowCoord[1] + 1);
    }

    if (value === 'backspace') handleBackspaceClick();
    if (value === 'enter') handleEnterClick();
  };

  const verifyIfRowIsFull = () => {
    const row = actualRowCoord[0];
    return Rows[row].every((letter) => letter);
  };

  const normalizeString = (string) => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const getCorrectLetterPositionsMap = (guessWord) => {
    const normalizedAnswer = normalizeString(answer);

    return guessWord.split('').map((letter, index) => {
      if (letter === normalizedAnswer[index]) return 'exact';
      if (normalizedAnswer.includes(letter)) return 'includes';
      return 'wrong';
    });
  };

  const handleEnterClick = () => {
    const isRowFull = verifyIfRowIsFull();
    if (isRowFull === false) {
      console.log('Faltam letras!');
      return;
    }

    const guessWord = Rows[actualRowCoord[0]].join('');
    const validWord = validGuesses.find((word) => word === guessWord);
    if (!validWord) {
      console.log('Esta não é uma palavra valida');
      return;
    }

    setRowState(getCorrectLetterPositionsMap(guessWord));

    goToNextRow();
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

  const generateId = (value) => {
    if (value === 'backspace') return 'Backspace';
    if (value === 'enter') return 'Enter';
    return `Key${value.toUpperCase()}`;
  };

  return (
    <KeyButton id={generateId(value)} onClick={(event) => handleClick(event, value)}>
      {value === 'backspace' ? <BsBackspace /> : value}
    </KeyButton>
  );
}

const validValues = 'qwertyuiopasdfghjklzxcvbnm'.split('').concat('enter', 'backspace');

Key.propTypes = {
  value: PropTypes.oneOf(validValues).isRequired,
};

export default Key;
