import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    aligItems: 'flex-start',
    justifyContent: 'center',
  },

  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',

    '& a': {
      color: 'white',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

class PalettList extends Component {
  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className=''>React Colors</h1>
            <Link to='palette/new'>Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {' '}
            {palettes.map((palette) => (
              <MiniPalette {...palette} key={palette.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalettList);
