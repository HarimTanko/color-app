import React from 'react';

export default function PaletteFooter(props) {
  const { palette } = props;
  return (
    <footer className='Palette-footer'>
      {palette.paletteName}
      <span className='emoji'>{palette.emoji}</span>
    </footer>
  );
}
