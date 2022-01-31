import React from 'react';
import PropTypes from 'prop-types';
import { RowGuess } from './Row.styles';
import Letter from '../Letter';

function Row({ rowNumber }) {
  return (
    <RowGuess>
      <Letter parentRowNumber={rowNumber} letterNumber={0} />
      <Letter parentRowNumber={rowNumber} letterNumber={1} />
      <Letter parentRowNumber={rowNumber} letterNumber={2} />
      <Letter parentRowNumber={rowNumber} letterNumber={3} />
      <Letter parentRowNumber={rowNumber} letterNumber={4} />
    </RowGuess>
  );
}

Row.proTypes = {
  rowNumber: PropTypes.number.isRequired,
};

export default Row;
