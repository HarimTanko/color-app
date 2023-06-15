import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette';
import PalettList from './PalettList';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
  return (
    <Routes className='Routes'>
      <Route exact path='/palette/new' element={<NewPaletteForm />} />
      <Route exact path='/' element={<PalettList palettes={seedColors} />} />
      <Route exact path='/palette/:id' element={<Palette />} />
      <Route
        exact
        path='palette/:paletteId/:colorId'
        element={<SingleColorPalette />}
      />
      {/* <div className='App'>
        <Palette palette={generatePalette(seedColors[4])} />
      </div> */}
    </Routes>
  );
}

export default App;
