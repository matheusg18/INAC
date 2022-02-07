import { useEffect } from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import MyProvider from './context/MyProvider';

const Main = styled.main`
  width: 80%;
  margin: 64px auto;
`;

function App() {
  useEffect(() => {
    document.onkeyup = (keyboardEvent) => {
      const keyButton = document.getElementById(keyboardEvent.code);
      if (keyButton) keyButton.click();
    };
  }, []);

  return (
    <MyProvider>
      <Main>
        <Grid />
        <Keyboard />
      </Main>
    </MyProvider>
  );
}

export default App;
