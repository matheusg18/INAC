import styled from 'styled-components';

export const LetterGuess = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 55, 0.75);
  border: 6px solid rgba(0, 0, 55, 0.95);
  border-bottom-width: ${({ isActual }) => (isActual ? '12px' : '6px')};
  color: white;
  font-size: 1.5rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
`;
