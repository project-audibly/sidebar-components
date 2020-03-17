const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3003;
// const controller = require('./controller.js');
const db = require('../db/index.js');
const Song = require('../db/seed.js');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/songs', (req, res) => {
    Song
    .find( {} )
    .sort( { likes: -1 })
    .limit(10)
    .then( (data) => {
            res.json(data);
        })
    .catch( (err) => {
        if (err) {
            res.send('THIS IS A CONTROLLER GET ERROR FOR ALL SONGS ', err);
        }
    })
});

app.listen(port, () => console.log(`DO YOU COME IN @ ${port}`));
