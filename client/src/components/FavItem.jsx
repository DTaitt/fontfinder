// @flow
import React from 'react';
import './FavItem.css';

import {CollectionItem, Button, Modal} from 'react-materialize';

type Props = {
  id: string,
  family: string,
  category: string,
  url: string,
  deleteFavorite(id: string): Promise<void>,
};

export default function FavItem(props:Props){
    let formattedFontFamily:string = '';

    function formatFontFamily() {
        let splitFontFamily = props.family.split(' ');
        let joinedFontFamily = splitFontFamily.join('+');
        formattedFontFamily = joinedFontFamily;
    }

    formatFontFamily()

    return(
        <CollectionItem className='fav-item'>
            <div className="info">
                <a href={`https://fonts.google.com/specimen/${props.family}`} className='family'>{props.family}</a>
                <p className='category'>{props.category}</p>
            </div>
            <div className="interaction">
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
            </div>
        </CollectionItem>
    )
}