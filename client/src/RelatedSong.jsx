import React from 'react';

class RelatedSong extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="songContainer">
                    <img src={this.props.relatedSong.song_image_url} className="info-image"/>
                    <div className="info-songName">{this.props.relatedSong.song_name}</div>
                    <div className="info-artistName">{this.props.relatedSong.artist_name}</div>
                    <div className="statistics">{this.props.relatedSong.song_plays}</div>
                    <div className="statistics">{this.props.relatedSong.song_likes}</div>
                    <div className="statistics">{this.props.relatedSong.song_reposts}</div>
                    <div className="statistics">{this.props.relatedSong.song_reposts}</div>
                </div>
            </div>
        )
    }
}

export default RelatedSong;