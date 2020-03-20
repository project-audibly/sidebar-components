import React from 'react';
import { shallow } from 'enzyme';
import RelatedSongsList from '../client/src/RelatedSongsList.jsx';
import RelatedSong from '../client/src/RelatedSong.jsx';

describe('Related Songs List Unit Tests', () => {
    const relatedSongs = [
        {
            song_name: "quia consequatur qui",
            artist_name: "Norbert",
            artist_location: "West Eldred",
            song_likes: 45881,
            song_reposts: 15680,
            song_plays: 18696,
            song_comments: 86383,
            artist_image_url: "http://lorempixel.com/640/480",
            song_image_url: "http://lorempixel.com/640/480"
        },
        {
            song_name: "minus est autem",
            artist_name: "Liam",
            artist_location: "Schustertown",
            song_likes: 67263,
            song_reposts: 22865,
            song_plays: 72379,
            song_comments: 94183,
            artist_image_url: "http://lorempixel.com/640/480",
            song_image_url: "http://lorempixel.com/640/480"
        },
        {
            song_name: "fugiat sequi non",
            artist_name: "Orion",
            artist_location: "Lake Mariahland",
            song_likes: 60582,
            song_reposts: 4803,
            song_plays: 94981,
            song_comments: 12407,
            artist_image_url: "http://lorempixel.com/640/480",
            song_image_url: "http://lorempixel.com/640/480"
        }
    ];

    test('should render the related songs component', () => {
        const wrapper = shallow(<RelatedSong relatedSongs={[]} />);
        expect(wrapper).toExist();
    });

    //cannot read property 'song_name' of undefined error 
})
