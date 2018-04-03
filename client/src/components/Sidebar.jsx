import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Card } from 'react-materialize';

import FavCard from './FavCard';
import FilterCard from './FilterCard';

import './Sidebar.css';

export default class Sidebar extends Component{
    render() {
        return(
            // <aside className="sidebar">
                <Card
                    className='sidebar teal'
                >
                    <Collapsible
                        accordion
                        defaultActiveKey={0}
                    >
                        <CollapsibleItem header='Filter' icon='search'>
                            <FilterCard />
                        </CollapsibleItem>
                        <CollapsibleItem header='Favorites' icon='favorite'>
                            <FavCard favData = {this.props.favData} deleteFavorite={this.props.deleteFavorite} />
                        </CollapsibleItem>
                    </Collapsible>
                </Card>  
            // </aside>
        )
    }
}