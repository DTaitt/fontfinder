// @flow
import React, {Component} from 'react';
import './FontCard.css';

import axios from 'axios';
import store from './../../redux/store'

import {CardPanel, Button, Modal, Dropdown, Collection, CollectionItem} from 'react-materialize';

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

export default class FontCard extends Component{

    // componentDidMount() {
    //     store.getState().favData.forEach(fav => {
    //         if (fav.id === this.props.id) {
    //             store.dispatch({
    //                 type: 'UPDATE_FONT_DATA_FAV_STATUS',
    //                 id: this.props.id,
    //             }) 
    //         }
    //     })
    // }

    async addFavorite(fav) {
        try {
            await axios.post(`/favorites`, fav);
        } catch (error) {
            console.log(error);
        }

        //adds the favorite object if its not already added to favorites
        const newFav = {
            id: this.props.id,
            family: this.props.family,
            category: this.props.category,
            url: this.props.url,
        }

        if(this.props.isInFav === false) {
            store.dispatch({
                type: "ADD_FAV_DATA",
                new: newFav,
            });
    
            store.dispatch({
                type: 'UPDATE_FONT_DATA_FAV_STATUS',
                id: this.props.id,
            })  
        } else {
            store.dispatch({
                type: 'REMOVE_FAV_DATA',
                favId: this.props.id,
            })
            store.dispatch({
              type: "UPDATE_FONT_DATA_FAV_STATUS",
              id: this.props.id
            });
        }

    }

    render() {
        let favData = store.getState().favData;
        // let fontData = store.getState().fontData;
        let isInFav = this.props.isInFav;

        const newFav = {
            id: this.props.id,
            family: this.props.family,
            category: this.props.category,
            url: this.props.url,
        }

        const updatedFav = {
            id: this.props.id,
            family: this.props.family,
            category: this.props.category,
            url: this.props.url,
        }

        const variantOptions = [
            { value: "100", label: "Thin" },
            { value: "100italic", label: "Thin Italic" },
            { value: "200", label: "Extra-Light" },
            { value: "200italic", label: "Extra-Light Italic" },
            { value: "300", label: "Light" },
            { value: "300italic", label: "Light Italic" },
            { value: "regular", label: "Regular" },
            { value: "italic", label: "Italic" },
            { value: "500", label: "Medium" },
            { value: "500italic", label: "Medium Italic" },
            { value: "600", label: "Semi-Bold" },
            { value: "600italic", label: "Semi-Bold Italic" },
            { value: "700", label: "Bold" },
            { value: "700italic", label: "Bold Italic" },
            { value: "800", label: "Extra-Bold" },
            { value: "800italic", label: "Extra-Bold Italic" },
            { value: "900", label: "Black" },
            { value: "900italic", label: "Black Italic" }
        ];
    
        return(
            <CardPanel 
                className="font-card white black-text z-depth-2"
            >
                <div className="info">
                    <a href={this.props.url} target='_blank'>
                        <h1 className="family">{this.props.family}</h1>
                    </a>
                    <p className="category">{this.props.category}</p>
                    <Dropdown trigger={
                        <Button>{this.props.variants.length} Variant{this.props.variants.length > 1 && 's'}</Button>
                    }>
                    <Collection>
                        {
                            this.props.variants.map((variant) => {
                                variantOptions.forEach((option) => {
                                    if(variant === option.value) {
                                        variant = option.label;
                                    }
                                })
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
                            this.props.isInFav ? 'remove' : 'favorite'
                        } 
                        onClick={() => {
                            // this.props.changeFavStatus()
                            this.addFavorite(newFav)
                        }}
                    />
                    <Modal
                        header={this.props.family}
                        trigger={<Button>Add Style</Button>}
                        className='import-code'
                    >
                        <div className="html">
                            <h2>Add to HTML</h2>
                            <blockquote><pre><code>
                                {`<link href="https://fonts.googleapis.com/css?family=${this.props.formattedFontFamily}" rel="stylesheet">`}
                            </code></pre></blockquote>
                        </div>
                        <div className="css">
                            <h2>Add to CSS</h2>
                            <blockquote><pre><code>
                                {`font-family: '${this.props.family}', ${this.props.category};`}
                            </code></pre></blockquote>
                        </div>                    
                    </Modal>
                </div>
            </CardPanel>
        )
    }
}