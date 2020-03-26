import React from 'react';
import LoginModal from './LoginModal.jsx';

function HeartButton (props) {
    return (
      <div>
        <LoginModal isShowing={props.isShowing} handleClose={props.handleClose} />
        <button className="optionalBtn" onClick={props.onClick}>
          <img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/heart.png" className="optionalIcon" />
        </button>
      </div>
    )
}
export default HeartButton;