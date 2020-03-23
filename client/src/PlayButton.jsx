import React from 'react';
import play from '../dist/images/play.png';
import pause from '../dist/images/pause.png';

function PlayButton(props) {
  const isPlaying = props.isPlaying;

  if (isPlaying) {
    return (<button onClick={props.onClick} className="button"><img src={play} className="playButton"/></button>)
  } else {
    return (<button onClick={props.onClick} className="button"><img src={pause} className="playButton"/></button>)

  }
}

export default PlayButton;
