import React from 'react';
import Tooltip from './Tooltip.jsx';
import heart from '../dist/images/heart.png';
import repost from '../dist/images/repost.png';

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
        <div className="listItem">
          <div className="listImage">
            <img src={playlistImage} className="info-image" />
          </div>
          <div className="info-name">
            <Tooltip image={userImage} name={username} location={userLocation} followers={userFollowers}>
              {username}
            </Tooltip>
          </div>
          <div className="info-songName">{playlistName}</div>

          <div className="statistics">
            <div className="statistics-withImage">
              <img className="icon" src={heart} />
              <div className="stats">{playlistLikes}</div>
            </div>
            <div className="statistics-withImage">
              <img className="icon" src={repost} />
              <div className="stats">{playlistReposts}</div>
            </div>
          </div>

        </div>
    )
  }
}

export default RelatedPlaylist; 