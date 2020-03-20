const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3003;
// const controller = require('./controller.js');
const db = require('../db/index.js');
const Song = require('../db/seed.js');

app.use(express.static('/Users/ohjeezz/Documents/Hack Reactor/sidebar-components-services/client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/mainSong', (req, res) => {
    Song
    .find( {} )
    .sort( { likes: -1 })
    .limit(1)
    .then( (data) => {
            res.json(data);
        })
    .catch( (err) => {
        if (err) {
            res.sendStatus(404).send('THIS IS A CONTROLLER GET ERROR FOR ALL SONGS ', err);
        }
    })
});

app.listen(port, () => console.log(`DO YOU COME IN @ ${port}`));
