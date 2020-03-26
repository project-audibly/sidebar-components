import React from 'react';
import LoginModal from './LoginModal.jsx';

class HeartButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowing: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isShowing: true });
  }

  closeModal() {
    this.setState({ isShowing: false });
  }

  render() {
    return (
      <div>
        <LoginModal isShowing={this.state.isShowing} handleClose={this.closeModal} />
        <button className="optionalBtn" onClick={this.openModal}>
          <img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/heart.png" className="optionalIcon" />
        </button>
      </div>
    )
  }
}
export default HeartButton;