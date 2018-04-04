import React from 'react';
import './FontCard.css';

import {CardPanel, Button} from 'react-materialize';

export default function FontCard (props){
    return(
        <CardPanel 
            className="font-card teal lighten-4 black-text z-depth-2"
        >
            <a href={props.url} target='_'>
                <h1 className="family">{props.family}</h1>
            </a>
            <p className="category">{props.category}</p>
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
        </CardPanel>
    )
}