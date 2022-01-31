import { useEffect } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import MyProvider from './context/MyProvider';

function App() {
  useEffect(() => {
    document.onkeyup = (keyboardEvent) => {
      const keyButton = document.getElementById(keyboardEvent.code);
      if (keyButton) keyButton.click();
    };
  }, []);

  return (
    <MyProvider>
      <main className="App">
        <Grid />
        <Keyboard />
      </main>
    </MyProvider>
  );
}

export default App;
