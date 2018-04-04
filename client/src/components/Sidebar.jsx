import React from 'react';
import { Collapsible, CollapsibleItem, Card } from 'react-materialize';
import './Sidebar.css';

import FavCard from './FavCard';
import FilterCard from './FilterCard';


export default function Sidebar(props){
    return(
        <Card className='sidebar teal'>
            <Collapsible accordion defaultActiveKey={0}>
                <CollapsibleItem header='Filter' icon='search'>
                    <FilterCard 
                        handleSearch={props.handleSearch} 
                        handleCategory={props.handleCategory} 
                        handleVariants = {props.handleVariants} 
                    />
                </CollapsibleItem>
                <CollapsibleItem header='Favorites' icon='favorite'>
                    <FavCard 
                        favData = {props.favData} 
                        deleteFavorite={props.deleteFavorite} 
                    />
                </CollapsibleItem>
            </Collapsible>
        </Card>  
    )
}