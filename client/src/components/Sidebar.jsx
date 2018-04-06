// @flow
import React from 'react';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';
import './Sidebar.css';

import FavCard from './FavCard';
import FilterCard from './FilterCard';

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
                    <FilterCard 
                        handleSearch={props.handleSearch} 
                        handleCategory={props.handleCategory} 
                        handleVariants = {props.handleVariants} 
                        />
                </CollapsibleItem>
                <Badge>{props.favData.length}</Badge>
                <CollapsibleItem header='Favorites' icon='favorite' className='favorite'>
                    <FavCard 
                        favData = {props.favData} 
                        deleteFavorite={props.deleteFavorite} 
                    />
                </CollapsibleItem>
            </Collapsible>
        </Card>  
    )
}