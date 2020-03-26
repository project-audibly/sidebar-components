import React from 'react';

class LoginModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.isShowing ?
          (
            <div className="modalContainer">
              <div className="modalContent">
                <div>TEST THIS TEST THAT TEST EVERYTHING</div>
                <button onClick={this.props.handleClose}>TEST CLOSE GO AWAY</button>
              </div>
            </div>
          )
          :
          (
            <div className="goAway"></div>
          )
        }
      </div>
    )
  }
}

export default LoginModal;