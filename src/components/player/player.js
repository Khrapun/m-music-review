import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
 
export default class Player extends Component {
  render() {

    const playlist = [
        {
          url: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
          cover: 'soundFile',
          title: 'Despacito',
          artist: [
            'Luis Fonsi',
            'Daddy Yankee'
          ]
        }
      ]

    return (
      <div>
        <MusicPlayer playlist={playlist} />
      </div>
    );
  }
}