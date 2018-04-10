// @flow
import React from 'react';
import './CardDisplay.css';

import FontCardContainer from './../FontCardContainer';

type Props = {
    fontsData: Object[],
    addFavorite():Promise<void>,
    searchQuery: string, 
    categoryValue: string,
    variantValues: string[],
    variants: string[]
}

export default function DisplayPanel(props:Props) {
    return(
        <section className="card-display">
            {
                props.fontsData.map((font) => {
                    return (
                        <FontCardContainer 
                            key = {font.family}
                            id = {font.family}
                            family = {font.family}
                            category = {font.category}
                            url = {`https://fonts.google.com/specimen/${font.family}`}
                            addFavorite={props.addFavorite}
                            deleteFavorite={props.deleteFavorite}
                            variants = {font.variants}
                        />
                    )
                })
            }
        </section>
    )
}