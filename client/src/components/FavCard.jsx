import React, { Component } from 'react';
import Card, {CardText} from 'material-ui/Card';

import FavItem from './FavItem';

export default class FavCard extends Component {
    render() {
        console.log(this.props)
        return(
            <Card className='favorite'>
                <h2>Favorites</h2>
                <div className="body">
                    <ul className="favorites">
                        {
                            this.props.favoritesData.map((fav) => {
                                console.log(fav)
                                return(
                                    <FavItem 
                                        key = {fav.id}
                                        family = {fav.fontFamily}
                                        category = {fav.typeFace}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </Card>
            // <div></div>
        )
    }
}