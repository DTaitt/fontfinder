import React from 'react';
import './CardDisplay.css';

import FontCard from './FontCard';

export default function DisplayPanel(props) {
    let fontsData = props.fontsData;

    if (props.searchQuery !== '' && fontsData !== undefined) {
            fontsData = fontsData.filter(
                (font) => {
                    // console.log(font.title.split())
                    return font.family.toLowerCase().indexOf(props.searchQuery) !== -1
                }
            )
        }

    return(
        <section className="card-display">
            {
                fontsData.map((font) => {
                    return (
                        <FontCard 
                            key = {font.family}
                            id = {font.family}
                            family = {font.family}
                            category = {font.category}
                            url = {`https://fonts.google.com/specimen/${font.family}`}
                            addFavorite={props.addFavorite}
                        />
                    )
                })
            }
        </section>
    )
}