import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import MyProvider from './context/MyProvider';

function App() {
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
