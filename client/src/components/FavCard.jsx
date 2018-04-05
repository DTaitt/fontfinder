// @flow
import React from 'react';
import { Collection} from 'react-materialize';

import './FavCard.css';
import FavItem from './FavItem';

type Props = {
    favData:Object[],
    key: string,
    id: string,
    family: string,
    category: string,
    url: string,
    deleteFavorite(id:string):void,
}

type Fav = {
  key: string,
  id: string,
  family: string,
  category: string,
  url: string,
};

export default function FavCard(props:Props) {

    return(
        <div className='fav-card'>
            <Collection>
                {
                    props.favData.map((fav:Fav) => {
                        return(
                            <FavItem 
                                key = {fav.id}
                                id = {fav.id}
                                family = {fav.family}
                                category = {fav.category}
                                url = {`https://fonts.google.com/specimen/${fav.family}`}
                                deleteFavorite={props.deleteFavorite}
                            />
                        )
                    })
                }
            </Collection>
        </div>
    )
}