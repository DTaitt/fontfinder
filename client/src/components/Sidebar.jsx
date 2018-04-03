import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

import FavCard from './FavCard'

import './Sidebar.css';

export default class Sidebar extends Component{
    render() {
        return(
            <aside className="sidebar">
                <Collapsible>
                    <CollapsibleItem header='Favorites' icon='filter_drama'>
                        <FavCard favData = {this.props.favData} deleteFavorite={this.props.deleteFavorite} />
                    </CollapsibleItem>
                    <CollapsibleItem header='Second' icon='filter_drama'>
                        <p>PLACEHOLDER</p>
                    </CollapsibleItem>
                </Collapsible>
                
            </aside>
        )
    }
}