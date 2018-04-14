// @flow
import React from 'react';
import { Collection} from 'react-materialize';

import './FavCard.css';
import FavItemContainer from './../FavItemContainer';
import store from './../../redux/store';

type Props = {
    favData:Object[],
    deleteFavorite(id:string):Promise<void>,
}

type Fav = {
  key: string,
  id: string,
  family: string,
  category: string,
  url: string,
};

export default function FavCard(props:Props) {
    const favData = store.getState().favData;
    return(
        <div className='fav-card'>
            <Collection>
                {
                    favData.map((fav:Fav) => {
                        return(
                            <FavItemContainer 
                                key = {fav.id}
                                id = {fav.id}
                                family = {fav.family}
                                category = {fav.category}
                                url = {`https://fonts.google.com/specimen/${fav.family}`}
                            />
                        )
                    })
                }
            </Collection>
        </div>
    )
}