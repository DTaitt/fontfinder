// @flow
import React from 'react';
import './FontCard.css';

import {CardPanel, Button, Modal} from 'react-materialize';

type newFav = {
    id: string,
    family: string,
    category: string,
    url: string,
}

type Props = {
    id: string,
    family: string,
    category: string,
    url: string,
    addFavorite(newFav:newFav):Promise<void>,
}

export default function FontCard (props:Props){
    let formattedFontFamily:string = '';

    function formatFontFamily() {
        let splitFontFamily = props.family.split(' ');
        let joinedFontFamily = splitFontFamily.join('+');
        formattedFontFamily = joinedFontFamily;
    }

    formatFontFamily()
    
    return(
        <CardPanel 
            className="font-card white black-text z-depth-2"
        >
            <div className="info">
                <a href={props.url} target='_blank'>
                    <h1 className="family">{props.family}</h1>
                </a>
                <p className="category">{props.category}</p>
                <p className="variants-length"> 
                    {props.variants.length} Variant{props.variants.length > 1 && 's'}
                </p>
            </div>
            <div className="interaction">
                <Button 
                    floating 
                    // small 
                    className='red' 
                    waves='light' 
                    icon='favorite' 
                    onClick={() => {
                                props.addFavorite({
                                id: props.id,
                                family: props.family,
                                category: props.category,
                                url: props.url
                            })
                        }}
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
        </CardPanel>
    )
}