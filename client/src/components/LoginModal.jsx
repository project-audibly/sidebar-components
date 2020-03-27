import React from 'react';
import styles from './LoginModal.css';

function LoginModal(props) {
  return (
    <div>
      {props.isShowing ?
        (
          <div className="modalBackground">
            <div className="modalContainer">
              <div className="modalContent">
                <div className="modalForm">
                  <div className="socialBtns">
                    <div className="socialBtnRow">
                      <button className="facebook">Continue with Facebook</button>
                    </div>
                    <div className="socialBtnRow">
                      <button className="google">Continue with Google</button>
                    </div>
                  </div>
                  <div className="separatorContainer">
                    <div className="separatorLeft"></div>
                    <span>or</span>
                    <div className="separatorRight"></div>
                  </div>
                  <div className="loginContainer">
                    <div>
                      <form>
                        <input type="text" placeholder="lol login if you can" className="loginForm"/>
                      </form>
                    </div>
                    <button className="loginBtn">Continue PLEASE</button>
                  </div>
                  <div className="helpINeedSomebody">
                    Need Help? cause i doo
                      </div>
                  <div>
                    <div className="legalStuffContainer">
                      <div className="legalP">
                        We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                      </div>
                      <div className="legalP">
                        We may use information you provide us in order to show you targeted ads as described in our <span className="helpINeedSomebody">Privacy Policy</span>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={props.handleClose} className="XMEN">X MARKS THE SPOT</button>
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

export default LoginModal;