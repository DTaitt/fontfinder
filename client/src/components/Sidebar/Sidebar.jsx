// @flow
import React from 'react';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';
import './Sidebar.css';

import FavCard from './../FavCard/FavCard';
import FilterCardContainer from './../FilterCardContainer';
import store from './../../redux/store';

type Props = {
    favData:Object[],
    deleteFavorite(id:string):Promise<void>, 
    handleSearch(searchQuery:string):void,
    handleCategory(categoryValue:string):void, 
    handleVariants(variantValues:string[]):void, 
}

export default function Sidebar(props:Props){
    return(
        <Card className='sidebar cyan darken-2'>
            <Collapsible accordion>
                <CollapsibleItem header='Filter' icon='search'>
                    <FilterCardContainer 
                        // handleSearch={props.handleSearch} 
                        // handleCategory={props.handleCategory} 
                        // handleVariants = {props.handleVariants} 
                        />
                </CollapsibleItem>
                <Badge>{store.getState().favData.length}</Badge>
                <CollapsibleItem header='Favorites' icon='favorite' className='favorite'>
                    <FavCard 
                        favData = {store.getState().favorites} 
                        // deleteFavorite={props.deleteFavorite} 
                    />
                </CollapsibleItem>
            </Collapsible>
        </Card>  
    )
}