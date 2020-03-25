import React from 'react';
import Tooltip from './Tooltip.jsx';
import HoverButtons from './HoverButtons.jsx';

import CSSModules from 'react-css-modules';
import styles from './RelatedSong.css';

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
      <div className="listContainer">
        <HoverButtons>

          <div className="listItem">
            <div className="listImage">
              <img src={songImage} className="infoImage" />
            </div>
            <div className="infoName">
              <Tooltip image={artistImage} name={artistName} location={artistLocation} followers={artistFollowers}>
                {artistName}
              </Tooltip>
            </div>
            <div className="infoSongName">{songName}</div>

            <div className="statistics">
              <div className="statisticsWithImage">
                <img className="icon" src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/play.png" />
                <div className="stats">{songPlays}</div>
              </div>
              <div className="statisticsWithImage">
                <img className="icon" src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/heart.png" />
                <div className="stats">{songLikes}</div>
              </div>
              <div className="statisticsWithImage">
                <img className="icon" src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/repost.png" />
                <div className="stats">{songReposts}</div>
              </div>
              <div className="statisticsWithImage">
                <img className="icon" src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/comment.png" />
                <div className="stats">{songComments}</div>
              </div>
            </div>

          </div>
        </HoverButtons>
      </div>
    )
  }
}

export default RelatedSong;