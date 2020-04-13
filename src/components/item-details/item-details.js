import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.css';

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        if(!itemId) {
            return
        }

        getData(itemId)
        .then((item) => {
            this.setState({ 
                item,
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

        if(!this.state.item) {
            return <span> Please, select a artist from a list</span>
        }

        const { item, item :{ name, albums, fans, picture, top}, loading } = this.state;

        return (

            

            <div className="item-details card d-flex">
                <img className="item-image" src={ picture }></img>
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                        {/* <li className="list-group-item">
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
                        </ol> */}
                    </ul>
                </div>
            </div>
        );
    }
}