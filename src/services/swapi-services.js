import { findAllByTitle } from "@testing-library/react";




export default class SwapiService {

    _apiBase = 'https://api.deezer.com'
  
    async getResourse(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if(!res.ok) {
        throw new Error(`Could not feth ${url}`+
        `, received ${res.status}`)
      }
      return await res.json()
    }                                 
  
    async getAllpeople() {
      const res = await this.getResourse(`/people/`)
      return res.results;
    }
  
    getPerson(id) {
      return this.getResourse(`/artist/${id}/`)
    }
  
    getChart = async () => {
      const chart = await this.getResourse(`/chart/0/artists`)
      return this._transformChart(chart)
    }

    async getAllPlanets() {
      const res = await this.getResourse(`/planets/`)
      return res.results;
    }
  
    getArtist = async (id) => {
      const artist = await this.getResourse(`/artist/${id}/`);
      const artistTop = await this.getResourse(`/artist/${id}/top`);
      return this._transformArtist(artist, artistTop);
    }

    getRadioTrackList = async (id) => {
      const radioTrackList = await this.getResourse(`/radio/${id}/tracks`)
      return this._transformRadioTrackList(radioTrackList)
    }

    getRadioTops = async () => {
      const radioTop = await this.getResourse(`/radio/top`)
      return this._transformRadioTop(radioTop)
    }
  
    async getAllStarships() {
      const res = await this.getResourse(`/starships/`)
      return res.results;
    }
  
  
    _transformArtist(artist, artistTop) {

      let topSongsNames = [];

      artistTop.data.map(songDescription => {
        topSongsNames.push(songDescription.title)
      });

      return  {
        name: artist.name,
        albums: artist.nb_album,
        fans: artist.nb_fan,
        picture: artist.picture_big,
        top: topSongsNames
      }
    }

    _transformChart(chart) {
      return chart.data
    }

    _transformRadioTop(radioTop) {
      return radioTop.data.map((obj) => {
        obj['name'] = obj['title']; // Assign new key 
        delete obj['title']; // Delete old key 
      return obj; 
      })
    }

    _transformRadioTrackList(trackList) {
      return trackList.data
    }
    
  }
