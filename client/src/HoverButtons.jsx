import React from 'react';
import PlayButton from './PlayButton.jsx';
import more from '../dist/images/more.png';
import heart from '../dist/images/heart.png';

class HoverButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      isPlaying: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
  }

  handleMouseOver() {
    this.setState({ isVisible: true })
  }

  handleMouseExit() {
    this.setState({ isVisible: false })
  }

  playSong() {
    this.setState({ isPlaying: true });
  }

  pauseSong() {
    this.setState({ isPlaying: false });
  }

  render() {
    const playing = this.state.isPlaying;
    let button;

    if (playing) {
      button = <PlayButton onClick={this.pauseSong} isPlaying={this.state.isPlaying} />

    } else {
      button = <PlayButton onClick={this.playSong} isPlaying={this.state.isPlaying} />
    }

    return (
      <div onMouseLeave={this.handleMouseExit}>
        {this.state.isVisible &&
          <div className="hover-overlay">
            <div className="hoverContainer">
              <div className="mainHoverBtn">
                {button}
              </div>
              <div className="optionalHoverBtn">
                <button className="optionalBtn"><img src={heart} className="optionalIcon" /></button>
                <button className="optionalBtn"><img src={more} className="optionalIcon" /></button>
              </div>
            </div>
          </div>
        }
        <div onMouseOver={this.handleMouseOver} className="listContainer">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default HoverButtons;