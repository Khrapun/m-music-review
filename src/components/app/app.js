import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swapi-services'; 

import PersonDetails from '../person-details';
import ItemList from '../item-list';

import RowContainer from '../row-container';

import Record from '../record'

import ItemDetails from '../item-details'

import ChartPage from '../chart-page'

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        const { getArtist, getRadioTrackList } = this.swapiService

        const artistDetails = (<ItemDetails getData={this.swapiService.getArtist} itemId={11}>
            <Record field='albums' label='Albums ' />
            <Record field='fans' label='Fans ' />
        </ItemDetails>)

        const radioDetails = (<ItemDetails getData={this.swapiService.getRadioTrackList} itemId={6}>
                <Record field='title' label='Title' />
            </ItemDetails>
        )

        return (
            <div>
                <Header />
                <RandomPlanet />
        
                <ChartPage />

                <RowContainer leftElement={artistDetails} rightElement={radioDetails}/>

        {/* <div className="row mb2">
            <div className="col-md-6">
                <ItemList onItemSelected={this.onPersonSelected} 
                          getData={ this.swapiService.getRadioTops}
                          renderItem={(item) => (<span>{item.name}<img className="radio-image" src={item.picture_small}></img></span>)}/>
            </div>
            <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
        </div> */}
            </div>

            


        );
    }
};