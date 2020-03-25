import React from 'react';

function PlayButton(props) {
  const isPlaying = props.isPlaying;

  if (isPlaying) {
    return (<button onClick={props.onClick} className="button"><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/pause.png" className="playButton"/></button>)
  } else {
    return (<button onClick={props.onClick} className="button"><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/play.png" className="playButton"/></button>)

  }
}

export default PlayButton;
