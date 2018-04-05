import React from 'react';
import { Collection} from 'react-materialize';

import './FavCard.css';
import FavItem from './FavItem';

export default function FavCard(props) {

    return(
        <div className='fav-card'>
            <Collection>
                {
                    props.favData.map((fav) => {
                        return(
                            <FavItem 
                                key = {fav.id}
                                id = {fav.id}
                                family = {fav.family}
                                category = {fav.category}
                                url = {`https://fonts.google.com/specimen/${fav.family}`}
                                deleteFavorite={props.deleteFavorite}
                            />
                        )
                    })
                }
            </Collection>
        </div>
    )
}