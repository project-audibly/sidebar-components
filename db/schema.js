const mongoose = require('mongoose');

// const songSchema = new mongoose.Schema({
//     _id: Number,
//     title: String,
//     likes: Number,
//     reposts: Number,
//     related_songs: 
//     [
//         {
//             _id: Number,
//             song_name: String,
//             artist_name: String,
//             artist_location: String,
//             song_likes: Number,
//             song_reposts: Number,
//             song_plays: Number,
//             song_comments: Number, 
//             artist_image_url: String,
//             song_image_url: String
//         }
//     ],
//     related_playlists:
//     [
//         {
//             _id: Number,
//             playlist_name: String,
//             playlist_likes: Number,
//             playlist_reposts: Number,
//             user_name: String,
//             user_location: String, 
//             user_followers: Number,
//             playlist_image_url: String,
//             user_image_url: String
//         }
//     ]
// });

const relatedSongSchema = new mongoose.Schema({
    _id: Number,
    song_name: String,
    artist_name: String,
    artist_location: String,
    song_likes: Number,
    song_reposts: Number,
    song_plays: Number,
    song_comments: Number, 
    artist_image_url: String,
    song_image_url: String
});

const relatedPlaylistSchema = new mongoose.Schema({
    _id: Number,
    playlist_name: String,
    playlist_likes: Number,
    playlist_reposts: Number,
    user_name: String,
    user_location: String, 
    user_followers: Number,
    playlist_image_url: String,
    user_image_url: String
});

const songSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    likes: Number,
    reposts: Number,
    related_songs: [relatedSongSchema],
    related_playlists: [relatedPlaylistSchema]
});

module.exports = {
    relatedSongSchema,
    relatedPlaylistSchema,
    songSchema
}; 