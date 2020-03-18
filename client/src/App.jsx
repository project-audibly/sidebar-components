import React from 'react';
import axios from 'axios';

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            mainSong: [],
            mainSongLikes: 0,
            mainSongReposts: 0,
            relatedSongs: [],
            relatedPlaylist: []
        };

        this.getMainSong = this.getMainSong.bind(this);
    }

    
    getMainSong () {
        axios.get('/api/mainSong')
        .then( (res) => {
            console.log('RES DATA FROM GET ALL SONGS GET REQUEST FROM CLIENT SIDE ', res.data);
            this.setState({ mainSong: res.data[0] })
            this.setState({ mainSongLikes: res.data[0].likes })
            this.setState({ mainSongReposts: res.data[0].reposts })
            this.setState({ relatedSongs: res.data[0].related_songs })
            this.setState({ relatedPlaylist: res.data[0].related_playlists })
        })
        .catch( (err) => {
            console.log('get err so many errs on client side ', err);
        })
    }
    
    componentDidMount () {
        this.getMainSong();
    }
    
    render() {
        return (
        <div>
            <div>TESTING REACT</div>
        </div>
        )
    }
}

export default App; 


// getTest () {
//     axios.get('/test')
//         .then(res => {
//             console.log('get test res ', res);
//         })
//         .catch(err => console.log('get test err ', err))
// }