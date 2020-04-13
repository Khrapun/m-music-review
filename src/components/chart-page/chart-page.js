import React, {Component} from 'react';
import PersonDetails from '../person-details';
import ItemList from '../item-list';

import SwapiService from '../../services/swapi-services'; 

import ErrorBoundry from '../error-boundry';

import './chart-page.css';

import RowContainer from '../row-container';

export default class App extends Component {

    swapiService = new SwapiService();

    state ={
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }



    render() {

        const itemList = (
                <ItemList onItemSelected={this.onPersonSelected} 
                  getData={ this.swapiService.getChart}
                  renderItem={(item) => item.name}/>
            );

        const personDetails = ( <PersonDetails personId={this.state.selectedPerson}/>)

        return (
            <ErrorBoundry>
                 <RowContainer leftElement={itemList} rightElement={personDetails}/>
            </ErrorBoundry>
        )                    
    }

};