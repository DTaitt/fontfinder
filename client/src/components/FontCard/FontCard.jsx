// @flow
import React from 'react';
import './FontCard.css';

import axios from 'axios';
import store from './../../redux/store'

import {CardPanel, Button, Modal, Dropdown, Collection, CollectionItem} from 'react-materialize';
import {favData} from '../../redux/reducers';

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
    variants: string[],
    addFavorite(newFav:newFav):Promise<void>,
    isInFav: boolean,
    changeFavStatus():void,
    formattedFontFamily: string,
}

export default function FontCard(props:Props){
    let favData = store.getState().favData;

    const newFav = {
        id: props.id,
        family: props.family,
        category: props.category,
        url: props.url,
    }

    async function addFavorite(fav) {
        try {
            await axios.post(`/favorites`, fav);
        } catch (error) {
            console.log(error);
        }

        //sets isInFav to true if the favorite object is already in favorites
        let isInFav = false;
        for (let i = 0; i < favData; i++) {
            fav.id === favData[i].id && (isInFav = true);
        }

        //adds the favorite object if its not already added to favorites
        isInFav === false && store.dispatch({
            type: "ADD_FAV_DATA",
            new: newFav,
          });
    }

    return(
        <CardPanel 
            className="font-card white black-text z-depth-2"
        >
            <div className="info">
                <a href={props.url} target='_blank'>
                    <h1 className="family">{props.family}</h1>
                </a>
                <p className="category">{props.category}</p>
                <Dropdown trigger={
                    <Button>{props.variants.length} Variant{props.variants.length > 1 && 's'}</Button>
                }>
                <Collection>
                    {
                        props.variants.map((variant) => {
                            return <CollectionItem className='variant' key={variant}>{variant}</CollectionItem>
                        })
                    }
                </Collection>
                </Dropdown>
            </div>
            <div className="interaction">
                <Button 
                    floating 
                    // small 
                    className='red' 
                    waves='light' 
                    icon={
                        props.isInFav ? 'remove' : 'favorite'
                    } 
                    onClick={() => {
                        // props.changeFavStatus()
                        addFavorite(newFav)
                    }}
                />
                <Modal
                    header={props.family}
                    trigger={<Button>Add Style</Button>}
                    className='import-code'
                >
                    <div className="html">
                        <h2>Add to HTML</h2>
                        <blockquote><pre><code>
                            {`<link href="https://fonts.googleapis.com/css?family=${props.formattedFontFamily}" rel="stylesheet">`}
                        </code></pre></blockquote>
                    </div>
                    <div className="css">
                        <h2>Add to CSS</h2>
                        <blockquote><pre><code>
                            {`font-family: '${props.family}', ${props.category};`}
                        </code></pre></blockquote>
                    </div>                    
                </Modal>
            </div>
        </CardPanel>
    )
}