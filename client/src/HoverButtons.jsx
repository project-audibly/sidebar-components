import React from 'react';
import play from '../dist/images/play.png';
import more from '../dist/images/more.png';
import heart from '../dist/images/heart.png';

class HoverButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
  }

  handleMouseOver() {
    this.setState({ isVisible: true })
  }

  handleMouseExit() {
    this.setState({ isVisible: false })
  }

  render() {
    return (
      <div onMouseLeave={this.handleMouseExit}>
        {this.state.isVisible &&
          <span className={'hover-overlay'}>
            <div className="listContainer">
            <button><img src={play} className="playButton" /></button>
            <button><img src={heart} className="heartButton" /></button>
            <button><img src={more} className = "moreButton" /></button>
            </div>
          </span>
        }
        <div onMouseOver={this.handleMouseOver} className="listContainer">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default HoverButtons;