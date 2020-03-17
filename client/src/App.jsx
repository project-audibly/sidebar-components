import React from 'react';
import axios from 'axios';

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        };

        this.getSongs = this.getSongs.bind(this);
    }

    
    getSongs () {
        axios.get('/api/songs')
        .then( (res) => {
            console.log('RES DATA FROM GET ALL SONGS GET REQUEST FROM CLIENT SIDE ', res.data);
            this.setState({ songs: res.data })
        })
        .catch( (err) => {
            console.log('get err so many errs on client side ', err);
        })
    }
    
    componentDidMount () {
        this.getSongs();
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