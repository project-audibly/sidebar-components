import React from 'react';
import styles from './MoreButton.css';

class MoreButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
    this.toggleOptions = this.toggleOptions.bind(this);
    // this.closeOptions = this.closeOptions.bind(this)
  }

  toggleOptions() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  // closeOptions() {
  //   this.setState({ isVisible: false })
  // }

  render() {
    return (
      <div>
        <button className="optionalBtn" onClick={this.toggleOptions}>
          <img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/more.png" className="optionalIcon" />
        </button>


        {this.state.isVisible ? (
          <div className="moreOptions">
            <div>
              <button className="moreOptionsBtn">Repost</button>
            </div>
            <div>
              <button className="moreOptionsBtn">Share</button>
            </div>
            <div><button className="moreOptionsBtn">Add to Next up</button>
            </div>
            <div>
              <button className="moreOptionsBtn">Add to playlist</button>
            </div>
            <div>
              <button className="moreOptionsBtn">Station</button>
            </div>
          </div>
        )
          : (
            null
          )
        }


      </div>
    )
  }
}

export default MoreButton