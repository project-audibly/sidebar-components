import React from 'react';

class RelatedPlaylist extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.relatedPlaylist.playlist_name}
      </div>
    )
  }
}

export default RelatedPlaylist; 