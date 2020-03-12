import React from 'react';
import axios from 'axios';

class App extends React.Component { 
    constructor(props) {
        super(props);

        this.getTest = this.getTest.bind(this);
    }

    getTest () {
        axios.get('/test')
            .then(res => {
                console.log('get test res ', res);
            })
            .catch(err => console.log('get test err ', err))
    }
    
    componentDidMount () {
        this.getTest();
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