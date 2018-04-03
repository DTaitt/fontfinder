import React, { Component } from 'react';
import {Card} from 'react-materialize';

import './FavCard.css';
import FavItem from './FavItem';

export default class FavCard extends Component {
    render() {
        return(
            <div className='fav-card'>
                    <ul className="favorites">
                        {
                            this.props.favData.map((fav) => {
                                return(
                                    <FavItem 
                                        key = {fav.id}
                                        id = {fav.id}
                                        family = {fav.family}
                                        category = {fav.category}
                                        url = {`https://fonts.google.com/specimen/${fav.family}`}
                                        deleteFavorite={this.props.deleteFavorite}
                                    />
                                )
                            })
                        }
                    </ul>
            </div>
        )
    }
}