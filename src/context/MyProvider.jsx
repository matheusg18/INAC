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

  const changeRowCoord = (letterCoord) => {
    setActualRowCoord((prev) => [prev[0], letterCoord]);
  };

  const setRowLetter = (letter, letterCoord = actualRowCoord[1]) => {
    setRows((prev) => {
      const prevClone = [...prev];
      prevClone[actualRowCoord[0]][letterCoord] = letter;
      return prevClone;
    });
  };

  return (
    <MyContext.Provider value={{ actualRowCoord, changeRowCoord, Rows, setRowLetter }}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
