import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette';
import PalettList from './PalettList';
import seedColors from './seedColors';

function App() {
  return (
    <Routes className='Routes'>
      <Route exact path='/' element={<PalettList palettes={seedColors} />} />
      <Route exact path='/palette/:id' element={<Palette />} />
      {/* <div className='App'>
        <Palette palette={generatePalette(seedColors[4])} />
      </div> */}
    </Routes>
  );
}

export default App;
