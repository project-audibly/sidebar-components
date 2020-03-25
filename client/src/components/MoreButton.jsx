import React from 'react';
import styles from './MoreButton.css';

class MoreButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowing: false,
    }
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  toggleOptions() {
    this.setState({ isShowing: !this.state.isShowing });
  }

  render() {
    return (
      <div>
        <button className="optionalBtn"
          onClick={ () => {
            this.toggleOptions();
            this.props.onClick(); 
            }
          }>
          <img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/more.png" className="optionalIcon" />
        </button>

        {this.state.isShowing ? 
          (
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
          : 
          ( null)
        }

      </div>
    )
  }
}

export default MoreButton