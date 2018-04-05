import React from 'react';
import './FontCard.css';

import {CardPanel, Button, Modal} from 'react-materialize';

export default function FontCard (props){
    let formattedFontFamily;

    function formatFontFamily() {
        let splitFontFamily = props.family.split(' ');
        let joinedFontFamily = splitFontFamily.join('+');
        formattedFontFamily = joinedFontFamily;
    }

    formatFontFamily()
    
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
            <Modal
                header={props.family}
                trigger={<Button>Expand</Button>}>
                <h2>Embed Font</h2>
                <p>{`<link href="https://fonts.googleapis.com/css?family=${formattedFontFamily}" rel="stylesheet">`}</p>
                <h2>Add to CSS</h2>
                <p>{`font-family: '${props.family}', ${props.category};`}</p>
            </Modal>
        </CardPanel>
    )
}