import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default function SingleColorPalette() {
  const [format, setFormat] = useState('hex');
  const { colorId, paletteId } = useParams();

  const findPalette = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const palette = generatePalette(findPalette(paletteId));
  const generatedShades = gatherShades(palette, colorId);

  const colorBoxes = generatedShades.map((shade) => (
    <ColorBox
      key={shade.name}
      name={shade.name}
      background={shade[format]}
      showLink={false}
    />
  ));

  const changeFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className='SingleColorPalette Palette'>
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className='Palette-colors'>
        {colorBoxes}
        <div className='go-back ColorBox'>
          <Link to={`/palette/${paletteId}`} className='back-button'>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter palette={palette} />
    </div>
  );
}
