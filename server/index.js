const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3003;
const controller = require('./controller.js');
const db = require('../db/index.js');

app.use(express.static('dist'));

app.use(bodyParser.json());

app.listen(port, () => console.log(`DO YOU COME IN @ ${port}`));
