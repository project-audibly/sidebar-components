const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sidebarcomponent', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error for mongo tears'));
db.once('open', () => {
    console.log('leggo mongo');
});

module.exports = db;