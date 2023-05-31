import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  console.log(generatePalette(seedColors[5]));
  return (
    <div className='App'>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
