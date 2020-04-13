import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if(!personId) {
            return
        }

        this.swapiService.getArtist(personId)
        .then((person) => {
            this.setState({ 
                person,
                loading: false
            })
        }) 
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

        if(!this.state.person) {
            return <span> Please, select a artist from a list</span>
        }

        const { person :{ name, albums, fans, picture, top}, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;

        const topSongs =  this.renderItems(top)

        return (

            

            <div className="person-details card d-flex">
                <img className="person-image" src={ picture }></img>
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Albums</span>
                            <span>{ albums }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Fans</span>
                            <span>{ fans }</span>
                        </li>
                        <ol className="list-group list-group-flush top-songs-list">
                            <h5>Top songs</h5>
                            {topSongs}
                        </ol>
                    </ul>
                </div>
            </div>
        );
    }
}