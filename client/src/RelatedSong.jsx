import React from 'react';

class RelatedSong extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>{this.props.relatedSong.song_name}</div>
                <div>{this.props.relatedSong.artist_name}</div>
                <img src={this.props.relatedSong.song_image_url} />
                <ul>{this.props.relatedSong.song_plays}</ul>
                <ul>{this.props.relatedSong.song_likes}</ul>
                <ul>{this.props.relatedSong.song_reposts}</ul>
                <ul>{this.props.relatedSong.song_comments}</ul>
            </div>
        )
    }
}

export default RelatedSong;