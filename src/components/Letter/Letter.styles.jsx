import styled from 'styled-components';

const stateColors = {
  exact: 'rgba(0, 153, 0, 0.75)',
  includes: 'rgba(244, 244, 0, 0.75)',
  wrong: 'rgba(64, 64, 64, 0.75)',
  none: 'rgba(0, 0, 55, 0.75)',
};

export const LetterGuess = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ state }) => stateColors[state]};
  border: ${({ state }) => (state === 'none' ? '6px solid rgba(0, 0, 55, 0.95)' : 'none')};
  border-bottom-width: ${({ isActual }) => (isActual ? '12px' : '6px')};
  color: white;
  font-size: 1.5rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
`;
