import React from 'react';
import RelatedPlaylist from './RelatedPlaylist.jsx';

function RelatedPlaylistsList(props) {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImage"><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/tab.png" className="headerIcon" /> </div>
        <div className="headerTitle">Related Playlists</div>
        <div className="headerMore">View all</div>
      </div>
      <div className="content">
        {props.relatedPlaylists.map((playlist, i) =>
          <RelatedPlaylist key={i} relatedPlaylist={playlist} />)}
      </div>
    </div>
  )
}

export default RelatedPlaylistsList;