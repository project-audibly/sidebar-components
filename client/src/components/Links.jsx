import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Links.css';

import HeartButton from './HeartButton.jsx'

function Links (props) {
  return (
    <div>
      <div className="linksContainer">
        <span className="link">Legal</span> <span className="hyphen">-</span>
        <span className="link">Privacy</span> <span className="hyphen">-</span>
        <span className="link">Cookies</span> <span className="hyphen">-</span>
        <span className="link">Imprint</span> <span className="hyphen">-</span>
        <span className="link">Creator Resources</span> <span className="hyphen">-</span>
        <span className="link">Blog</span> <span className="hyphen">-</span>
        <span className="link">Charts</span> <span className="hyphen">-</span>
        <span className="link">Popular searches</span>

        <div className="languageOption">
          <span className="blue">Language:</span> English (US)
        </div>

        <HeartButton />

      </div>
    </div>
  )
}

export default Links;
