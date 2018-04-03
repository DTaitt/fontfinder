import React from 'react';

import './FavItem.css';

export default function FavItem(props){
    return(
        <li
            onClick={() => {props.deleteFavorite(props.id)}}
            className='fav-item'
        >
            {/* <a href={props.url} target='_blank'> */}
                <p className='family'>{props.family}</p>
                <p className='category'>{props.category}</p>
            {/* </a> */}
        </li>
    )
}