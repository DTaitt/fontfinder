import React from 'react';

import {CollectionItem, Button} from 'react-materialize';
import './FavItem.css';

export default function FavItem(props){
    return(
        <CollectionItem
            className='fav-item'
        >
            <p className='family'>{props.family}</p>
            <p className='category'>{props.category}</p>
            <Button 
                    floating 
                    small 
                    className='red' 
                    waves='light' 
                    icon='remove_circle' 
                    onClick={() => {props.deleteFavorite(props.id)}}
                />
        </CollectionItem>
    )
}