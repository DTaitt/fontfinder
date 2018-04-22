// @flow
import React, {Component} from 'react';
import './CardDisplay.css';

import FontCardContainer from './../FontCardContainer';
import store from './../../redux/store';

type Props = {};

export default function CardDisplay (props:Props) {
    return(
        <section className="card-display">
            {
                props.fontData.map((font) => {
                    return (
                        <FontCardContainer 
                            key = {font.family}
                            id = {font.family}
                            family = {font.family}
                            category = {font.category}
                            url = {`https://fonts.google.com/specimen/${font.family}`}
                            variants = {font.variants}
                            isInFav = {font.isInFav}
                        />
                    )
                })
            }
        </section>
    )
}