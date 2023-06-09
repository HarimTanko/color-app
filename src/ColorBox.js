import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };

    this.changeCopyState = this.changeCopyState.bind(this);
    this.getTextColor = this.getTextColor.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  getTextColor(color) {
    if (chroma.contrast(color, 'white') < 4.5) return 'black';
    else return 'white';
  }

  render() {
    const { name, background, id, paletteId, showLink } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='ColorBox' style={{ background }}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          ></div>
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!!</h1>
            <p>{background}</p>
          </div>
          <div className='copy-container'>
            <div
              className='box-content'
              style={{ color: this.getTextColor(background) }}
            >
              {name}
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation}
            >
              <span className='see-more'>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
