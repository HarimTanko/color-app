import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default function Palette() {
  const { id } = useParams();

  const findPalette = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };

  const palette = generatePalette(findPalette(id));

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      id={color.id}
      paletteId={id}
      showLink={true}
    />
  ));

  const changeLevel = (level) => {
    setLevel(level);
  };

  const changeFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className='Palette'>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className='Palette-colors'>{colorBoxes}</div>
      <PaletteFooter palette={palette} />
    </div>
  );
}
