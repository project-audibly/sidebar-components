import React from 'react';
import PlayButton from './PlayButton.jsx';
import MoreButton from './MoreButton.jsx';
import HeartButton from './HeartButton.jsx';

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
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.stayVisible = this.stayVisible.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleMouseOver() {
    this.setState({ isVisible: true })
  }

  handleMouseExit() {
    this.setState({ isVisible: false });
  }

  playSong() {
    this.setState({ isPlaying: true });
    this.setState({ isClicked: true})
  }

  pauseSong() {
    this.setState({ isPlaying: false });
    this.setState({ isClicked: false})
  }

  stayVisible() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  openModal() {
    this.setState({ isShowing: true });
  }

  closeModal() {
    this.setState({ isShowing: false });
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
      <div className="hoverOverlay">
        {this.state.isVisible ?
          (
          <div className="hoverArea" onMouseLeave={ this.state.isClicked || this.state.isShowing ? () => {} : this.handleMouseExit }>
            <div className="hoverContainer">
              <div className="mainHoverBtn">
                {button}
              </div>
              <div className="optionalHoverBtn">
                <HeartButton isShowing={this.state.isShowing} handleClose={this.closeModal} onClick={this.openModal} />
                {/* <button className="optionalBtn" onClick={this.stayVisible}><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/heart.png" className="optionalIcon" /></button> */}
                <MoreButton onClick={this.stayVisible}/>
              </div>
            </div>
          </div>
          )
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