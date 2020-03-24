import React from 'react';
import RelatedPlaylist from './RelatedPlaylist.jsx';

function RelatedPlaylistsList(props) {
  return (
    <div>
      <div> Related Playlists </div>
      <div className="content">
        {props.relatedPlaylists.map((playlist, i) =>
          <RelatedPlaylist key={i} relatedPlaylist={playlist} />)}
      </div>
    </div>
  )
}

export default RelatedPlaylistsList;