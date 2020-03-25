import React from 'react';
import RelatedSong from './RelatedSong.jsx';

function RelatedSongsList(props) {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImage"><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/wave.png" className="headerIcon"/> </div>
        <div className="headerTitle">Related Tracks</div>
        <div className="headerMore">View all</div>
      </div>

      <div className="content">
        {props.relatedSongs.map((song, i) =>
          <RelatedSong key={i} relatedSong={song} />)}
      </div>
    </div>
    )
}

export default RelatedSongsList;