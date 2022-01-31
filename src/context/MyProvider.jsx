import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [actualRowCoord, setActualRowCoord] = useState([0, 0]);
  const [Rows, setRows] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);
  const [answer, setAnswer] = useState('negão');
  const [rowsState, setRowsState] = useState([
    ['none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none'],
    ['none', 'none', 'none', 'none', 'none'],
  ]);

  const changeRowCoord = (letterCoord) => {
    setActualRowCoord((prev) => [prev[0], letterCoord]);
  };

  const goToNextRow = () => {
    setActualRowCoord((prev) => [prev[0] + 1, 0]);
  };

  const setRowLetter = (letter, letterCoord = actualRowCoord[1]) => {
    setRows((prev) => {
      const prevClone = [...prev];
      prevClone[actualRowCoord[0]][letterCoord] = letter;
      return prevClone;
    });
  };

  const setRowState = (state) => {
    setRowsState((prev) => {
      const prevClone = [...prev];
      prevClone[actualRowCoord[0]] = [...state];
      return prevClone;
    });
  };

  return (
    <MyContext.Provider
      value={{
        actualRowCoord,
        changeRowCoord,
        goToNextRow,
        Rows,
        setRowLetter,
        answer,
        rowsState,
        setRowState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
