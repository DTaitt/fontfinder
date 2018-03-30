import React from 'react';

import FontCard from './FontCard';

export default function CardDisplay(props) {
    return(
        <section className="card-display">
            {
                props.fontsData.map((font) => {
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