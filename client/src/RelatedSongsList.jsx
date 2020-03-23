import React from 'react';
import RelatedSong from './RelatedSong.jsx';

function RelatedSongsList(props) {
  return (
    <div>
      {/* <div className="header flex">
        <div className="headerTitle">Related Tracks</div>
        <div className="headerOption">View all</div>
      </div> */}
      Related Songs
      <div>
        {props.relatedSongs.map((song, i) =>
          <RelatedSong key={i} relatedSong={song} />)}
      </div>
    </div>
    )
}

export default RelatedSongsList;