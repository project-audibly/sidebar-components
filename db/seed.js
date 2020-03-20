const mongoose = require('mongoose');
const { relatedSongSchema, relatedPlaylistSchema, songSchema } = require('../db/schema.js');
const faker = require('faker');
const db = require('./index.js');

const Song = mongoose.model('Song', songSchema);

const generateRelatedSongs = function () {
    let relatedSongs = [];

    for (let i = 0; i < 3; i++) {
        const songName = faker.lorem.words(); 
        const artistName = faker.name.firstName();
        const artistLocation = faker.address.city();
        const artistFollowers = faker.random.number();
        const songLikes = faker.random.number();
        const songReposts = faker.random.number();
        const songPlays = faker.random.number();
        const songComments = faker.random.number();
        const artistImage = faker.image.imageUrl();
        const songImage = faker.image.imageUrl();

        let relatedSong = {
            song_name: songName,
            artist_name: artistName,
            artist_location: artistLocation,
            artist_followers: artistFollowers,
            song_likes: songLikes,
            song_reposts: songReposts,
            song_plays: songPlays,
            song_comments: songComments, 
            artist_image_url: artistImage,
            song_image_url: songImage
        };

        relatedSongs.push(relatedSong);
    }
    return relatedSongs; 
};

const generateRelatedPlaylists = function () {
    let relatedPlaylists = [];

    for (let i = 0; i < 3; i++) {
        const playlistName = faker.lorem.words();
        const playlistLikes = faker.random.number();
        const playlistReposts = faker.random.number();
        const userName = faker.lorem.words();
        const userLocation = faker.address.city();
        const userFollowers = faker.random.number();
        const playlistImage = faker.image.imageUrl();
        const userImage = faker.image.imageUrl();

        let relatedPlaylist = {
            playlist_name: playlistName,
            playlist_likes: playlistLikes,
            playlist_reposts: playlistReposts,
            user_name: userName,
            user_location: userLocation, 
            user_followers: userFollowers,
            playlist_image_url: playlistImage,
            user_image_url: userImage
        };

        relatedPlaylists.push(relatedPlaylist);
    }
    return relatedPlaylists;
};

const generateSongs = function () {
    let songs = [];

    for (let i = 0; i < 100; i++) {
        const title = faker.lorem.words();
        const likes = faker.random.number();
        const reposts = faker.random.number();
        
        let song = new Song({
            title: title,
            likes: likes,
            reposts: reposts,
            related_songs: generateRelatedSongs(),
            related_playlists: generateRelatedPlaylists()
        })    
        songs.push(song);
    }
    return songs; 
};

Song.collection.insertMany(generateSongs());

module.exports = Song; 