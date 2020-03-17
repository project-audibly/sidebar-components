const mongoose = require('mongoose');
const express = require('express');
const Song = require('../db/seed.js');
const axios = require('axios');

const getAllSongs = (req, res) => {
    Song
    .find( {} )
    .sort( { likes: -1 })
    .limit(10)
    .exec( (err, data) => {
        if (err) {
            res.send('THIS IS A CONTROLLER GET ERROR FOR ALL SONGS ', err);
        } else {
            console.log(data);
            res.json(data);
        }
    })
}

module.exports = {
    getAllSongs
}