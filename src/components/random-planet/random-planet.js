import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        artist: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateArtist();
        this.interval = setInterval(this.updateArtist, 5000);
        // clearInterval(this.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onArtistLoaded = (artist) => {
        this.setState({ 
            artist,
            loading: false
        });
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateArtist = () => {
        const artistId = 1 + Math.random() * (10000);
        
        this.swapiService
            .getArtist(artistId)
            .then(this.onArtistLoaded)
            .catch(this.onError);
    }

    renderItems = (arr) => {
        return arr.map((name, index) => {
          return (
            <li className="list-group-item"
                key={index}>
                <span>{ name }</span>
            </li>
          );
        });
    }

    render () {

        const { artist, loading, error} = this.state;

        const hasData = !(loading || error) 

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <ArtistView artist={artist} renderItems={this.renderItems}/> : null


        return (
            <div className="person-details card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const ArtistView = ({artist, renderItems}) => {

    const { name, albums, fans, picture, top } = artist;

    const topSongs = renderItems(top);

    return(
        <React.Fragment>
                <img className="person-image" src={ picture }></img>
                <div className="card-body">
                    <h4 className="artist-name">{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Albums</span>
                            <span>{ albums }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Fans</span>
                            <span>{ fans }</span>
                        </li>
                    </ul>
                    <ol className="list-group list-group-flush top-songs-list">
                        <h5>Top songs</h5>
                        {topSongs}
                    </ol>
                </div>
        </React.Fragment>
    )
    
}