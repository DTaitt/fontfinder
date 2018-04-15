// @flow
import React from 'react';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';
import './Sidebar.css';

import FavCard from './../FavCard/FavCard';
import FilterCardContainer from './../FilterCardContainer';
import store from './../../redux/store';

type Props = {}

export default function Sidebar(props:Props){
    return(
        <Card className='sidebar cyan darken-2'>
            <Collapsible accordion>
                <CollapsibleItem header='Filter' icon='search'>
                    <FilterCardContainer />
                </CollapsibleItem>
                <Badge>{store.getState().favData.length}</Badge>
                <CollapsibleItem header='Favorites' icon='favorite' className='favorite'>
                    <FavCard />
                </CollapsibleItem>
            </Collapsible>
        </Card>  
    )
}