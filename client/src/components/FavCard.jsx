import React, { Component } from 'react';
import Card, {CardText} from 'material-ui/Card';

import FavItem from './FavItem';

export default class FavCard extends Component {
    render() {
        return(
            <Card className='favorite'>
                <h2>Favorites</h2>
                <div className="body">
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
            </Card>
        )
    }
}