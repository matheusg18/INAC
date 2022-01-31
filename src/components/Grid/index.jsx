import React from 'react';
import Row from '../Row';
import { GridGuess } from './Grid.styles';

function Grid() {
  return (
    <GridGuess>
      <Row rowNumber={0} />
      <Row rowNumber={1} />
      <Row rowNumber={2} />
      <Row rowNumber={3} />
      <Row rowNumber={4} />
      <Row rowNumber={5} />
    </GridGuess>
  );
}

export default Grid;
