import React from 'react';

class RelatedSong extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.relatedSong.song_name}
            </div>
        )
    }
}

export default RelatedSong;