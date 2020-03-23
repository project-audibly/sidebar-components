import React from 'react';
import Tooltip from './Tooltip.jsx';

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
          <img src={playlistImage} className="info-image" />
          <div className="info-name">
            <Tooltip image={userImage} name={username} location={userLocation} followers={userFollowers}>
              {username}
            </Tooltip>
          </div>
          <div className="info-songName">{playlistName}</div>
          <span className="statistics">{playlistLikes}</span>
          <span className="statistics">{playlistReposts}</span>
        </div>
    )
  }
}

export default RelatedPlaylist; 