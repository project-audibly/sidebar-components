import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Tooltip.css';

class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
  }

  handleMouseOver() {
    this.setState({ isVisible: true });
  }

  handleMouseExit() {
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <span className='tooltip' onMouseLeave={this.handleMouseExit}>
        {this.state.isVisible &&
          <span className={`tooltipBubble tooltipBottom`}>
              <div>
                <img src={this.props.image} className='tooltipImage'></img>
                <div className='tooltipName'>{this.props.name}</div>
                <div className='tooltipFollowers'>{this.props.followers}</div>
                <div className='tooltipLocation'>{this.props.location}</div>
              </div>
          </span>
        }
        <span onMouseOver={this.handleMouseOver}>
          {this.props.children}
        </span>
      </span>
    )
  }
}

export default Tooltip;
