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
          <span className={`tooltip-bubble tooltip-bottom`}>
            <span className='tooltip-message'>
                <div>
                    <img src={this.props.image} className="tooltip-image"></img>
                    <div className='tooltip-name'>{this.props.name}</div>
                    <div className='tooltip-followers'>{this.props.followers}</div>
                    <div className='tooltip-location'>{this.props.location}</div>
                </div>
            </span>
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
