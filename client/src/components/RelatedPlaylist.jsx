import React from 'react';
import Tooltip from './Tooltip.jsx';

import CSSModules from 'react-css-modules';
import styles from './RelatedPlaylist.css';

class RelatedPlaylist extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let playlistName = this.props.relatedPlaylist.playlist_name;
    let playlistLikes = this.props.relatedPlaylist.playlist_likes;
    let playlistReposts = this.props.relatedPlaylist.playlist_reposts;
    let username = this.props.relatedPlaylist.user_name;
    let userLocation = this.props.relatedPlaylist.user_location;
    let userFollowers = this.props.relatedPlaylist.user_followers;
    let playlistImage = this.props.relatedPlaylist.playlist_image_url;
    let userImage = this.props.relatedPlaylist.user_image_url;

    return (
      <div className="listContainer">

        <div className="listItem">
          <div className="listImage">
            <img src={playlistImage} className="infoImage" />
          </div>
          <div className="infoName">
            <Tooltip image={userImage} name={username} location={userLocation} followers={userFollowers}>
              {username}
            </Tooltip>
          </div>
          <div className="infoSongName">{playlistName}</div>

          <div className="statistics">
            <div className="statisticsWithImage">
              <img className="icon" src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/heart.png" />
              <div className="stats">{playlistLikes}</div>
            </div>
            <div className="statisticsWithImage">
              <img className="icon" src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/repost.png" />
              <div className="stats">{playlistReposts}</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RelatedPlaylist; 