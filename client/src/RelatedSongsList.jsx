import React from 'react';
import RelatedSong from './RelatedSong.jsx';

function RelatedSongsList (props) {
    return (
        <div>
            {props.relatedSongs.map( (song, i) => 
                <RelatedSong key={i} relatedSong={song} />)}
        </div>
    )
}

export default RelatedSongsList;