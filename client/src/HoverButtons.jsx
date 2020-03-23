import React from 'react';

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
            <div>
            <button>PLAY BUTTON TEST</button>
            <button>LIKE BUTTON TEST</button>
            <button>MORE BUTTON TEST</button>
            </div>
          </span>
        }
        <div onMouseOver={this.handleMouseOver}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default HoverButtons;