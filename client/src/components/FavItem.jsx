import React from 'react';

export default function FavItem(props){
    return(
        <li>
            <p class='family'>{props.family}</p>
            <p class='category'>{props.category}</p>
        </li>
    )
}