import React from 'react';
import RelatedPlaylist from './RelatedPlaylist.jsx';
import tab from '../dist/images/tab.png';

function RelatedPlaylistsList(props) {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImage"><img src={tab} className="headerIcon" /> </div>
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