import React from 'react';

export default function FavItem(props){
    return(
        <li
            onClick={() => {props.deleteFavorite(props.id)}}
        >
            {/* <a href={props.url} target='_blank'> */}
                <p className='family'>{props.family}</p>
                <p className='category'>{props.category}</p>
            {/* </a> */}
        </li>
    )
}