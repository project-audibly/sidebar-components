import React from 'react';

class ArtistTooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    handleMouseOver() {
        this.setState({isVisible: true});
    }

    handleMouseExit() {
        this.setState({isVisible: false});
    }

    render() {
      return (
        <span className='tooltip'
            onMouseLeave={this.handleMouseExit}
          >
          {this.state.isVisible &&
          <span className={`tooltip-bubble tooltip-${this.props.position}`}>
            <span className='tooltip-message'>{this.props.contents}</span>
          </span>
          }
          <span onMouseOver={this.handleMouseOver}>
            {this.props.children}
          </span>
        </span>
      )
    }
  }
  
export default ArtistTooltip;
