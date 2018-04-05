import React from 'react';
import './FavItem.css';

import {CollectionItem, Button, Modal} from 'react-materialize';

export default function FavItem(props){
    let formattedFontFamily;

    function formatFontFamily() {
        let splitFontFamily = props.family.split(' ');
        let joinedFontFamily = splitFontFamily.join('+');
        formattedFontFamily = joinedFontFamily;
    }

    formatFontFamily()

    return(
        <CollectionItem className='fav-item'>
            <p className='family'>{props.family}</p>
            <p className='category'>{props.category}</p>
            <Button 
                floating 
                // small 
                className='red' 
                waves='light' 
                icon='remove_circle' 
                onClick={() => {props.deleteFavorite(props.id)}}
            />
            <Modal
                header={props.family}
                trigger={<Button>Expand</Button>}>
                <h2>Embed Font</h2>
                <p>{`<link href="https://fonts.googleapis.com/css?family=${formattedFontFamily}" rel="stylesheet">`}</p>
                <h2>Add to CSS</h2>
                <p>{`font-family: '${props.family}', ${props.category};`}</p>
            </Modal>
        </CollectionItem>
    )
}