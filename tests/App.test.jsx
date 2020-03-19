import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import App from '../client/src/App.jsx';

describe('App Unit Tests', () => {
    test('should render the app component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toExist();
    });

    jest.mock('axios', () => {
        const song = [{
            "title": "ea at et",
            "likes": 99998,
            "reposts": 36993,
            "related_songs": [{
                "song_name": "quia consequatur qui",
                "artist_name": "Norbert",
                "artist_location": "West Eldred",
                "song_likes": 45881,
                "song_reposts": 15680,
                "song_plays": 18696,
                "song_comments": 86383,
                "artist_image_url": "http://lorempixel.com/640/480",
                "song_image_url": "http://lorempixel.com/640/480"
            },
            {
                "song_name": "minus est autem",
                "artist_name": "Liam",
                "artist_location": "Schustertown",
                "song_likes": 67263,
                "song_reposts": 22865,
                "song_plays": 72379,
                "song_comments": 94183,
                "artist_image_url": "http://lorempixel.com/640/480",
                "song_image_url": "http://lorempixel.com/640/480"
            },
            {
                "song_name": "fugiat sequi non",
                "artist_name": "Orion",
                "artist_location": "Lake Mariahland",
                "song_likes": 60582,
                "song_reposts": 4803,
                "song_plays": 94981,
                "song_comments": 12407,
                "artist_image_url": "http://lorempixel.com/640/480",
                "song_image_url": "http://lorempixel.com/640/480"
            }],
            "related_playlists": [{
                "playlist_name": "laudantium illum non",
                "playlist_likes": 7365,
                "playlist_reposts": 85896,
                "user_name": "necessitatibus ex rerum",
                "user_location": "Hayleyview",
                "user_followers": 1806,
                "playlist_image_url": "http://lorempixel.com/640/480",
                "user_image_url": "http://lorempixel.com/640/480"
            },
            {
                "playlist_name": "molestiae reiciendis ipsum",
                "playlist_likes": 21307,
                "playlist_reposts": 45258,
                "user_name": "commodi amet unde",
                "user_location": "Rathburgh",
                "user_followers": 30142,
                "playlist_image_url": "http://lorempixel.com/640/480",
                "user_image_url": "http://lorempixel.com/640/480"
            },
            {
                "playlist_name": "eos quasi aperiam",
                "playlist_likes": 2265,
                "playlist_reposts": 89291,
                "user_name": "qui animi libero",
                "user_location": "South Terranceport",
                "user_followers": 21314,
                "playlist_image_url": "http://lorempixel.com/640/480",
                "user_image_url": "http://lorempixel.com/640/480"
            }]
        }]

        return {
            get: jest.fn(() => Promise.resolve(song)),
        };
    })

    test('should invoke getMainSong on componentDidMount', () => {
        const wrapper = shallow(<App />);
        const mock = jest.fn();
        wrapper.instance().getMainSong = mock;
        wrapper.instance().forceUpdate();
        wrapper
            .instance()
            .componentDidMount();
        expect(mock).toHaveBeenCalled();
    })
})