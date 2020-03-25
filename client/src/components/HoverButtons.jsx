import React from 'react';
import PlayButton from './PlayButton.jsx';
import MoreButton from './MoreButton.jsx';

import CSSModules from 'react-css-modules';
import styles from './HoverButtons.css';

class HoverButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      isPlaying: false,
      isClicked: false,
      isShowing: false,
    }
    this.toggleOptions = this.toggleOptions.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.stayVisible = this.stayVisible.bind(this);
  }

  toggleOptions() {
    this.setState({ isShowing: !this.state.isShowing });
  }

  handleMouseOver() {
    this.setState({ isVisible: true })
  }

  handleMouseExit() {
    this.setState({ isVisible: false });
  }

  playSong() {
    this.setState({ isPlaying: true });
  }

  pauseSong() {
    this.setState({ isPlaying: false });
  }

  stayVisible() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  componentWillUnmount() {
    window.removeEventListener("mouseleave");
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
      <div>

        {this.state.isVisible ?
          (<div className="hoverOverlay" onMouseLeave={this.handleMouseExit}>
            <div className="hoverContainer">
              <div className="mainHoverBtn">
                {button}
              </div>
              <div className="optionalHoverBtn">
                <button className="optionalBtn" onClick={this.stayVisible}><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/heart.png" className="optionalIcon" /></button>
                {/* <MoreButton onClick={this.stayVisible}/> */}
                <button className="optionalBtn" onClick={() => { this.toggleOptions(); this.stayVisible() }}
                ><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/more.png" className="optionalIcon" /><MoreButton isShowing={this.state.isShowing} /></button>
              </div>
            </div>
          </div>)
          :
          (null)
        }

        <div onMouseOver={this.handleMouseOver} className="listContainer">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default HoverButtons;