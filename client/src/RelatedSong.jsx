import React from 'react';
import Tooltip from './Tooltip.jsx';
import HoverButtons from './HoverButtons.jsx';
import play from '../dist/images/play.png';
import heart from '../dist/images/heart.png';
import repost from '../dist/images/repost.png';
import comment from '../dist/images/comment.png';

class RelatedSong extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let artistImage = this.props.relatedSong.artist_image_url;
    let artistName = this.props.relatedSong.artist_name;
    let artistFollowers = this.props.relatedSong.artist_followers;
    let artistLocation = this.props.relatedSong.artist_location;
    let songImage = this.props.relatedSong.song_image_url;
    let songName = this.props.relatedSong.song_name;
    let songPlays = this.props.relatedSong.song_plays;
    let songLikes = this.props.relatedSong.song_likes;
    let songReposts = this.props.relatedSong.song_reposts;
    let songComments = this.props.relatedSong.song_comments;

    return (
      <HoverButtons>
        <div className="listContainer">
          
          <img src={songImage} className="info-image" />
          <div className="info-name">
            <Tooltip image={artistImage} name={artistName} location={artistLocation} followers={artistFollowers}>
              {artistName}
            </Tooltip>
          </div>
          <div className="info-songName">{songName}</div>
          <div className="statisticsFirst">
            <img className="icon" src={play} />
            {songPlays}
          </div>
          <div className="statistics">
            <img className="icon" src={heart} />
            {songLikes}
          </div>
          <div className="statistics">
            <img className="icon" src={repost} />
            {songReposts}
          </div>
          <div className="statistics">
            <img className="icon" src={comment} />
            {songComments}
          </div>

        </div>
      </HoverButtons>
    )
  }
}

export default RelatedSong;