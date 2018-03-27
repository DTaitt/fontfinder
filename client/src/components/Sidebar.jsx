import React, { Component } from 'react';
import FavCard from './FavCard'

export default class Sidebar extends Component{
    render() {
        return(
            <aside className="sidebar">
                <FavCard favoritesData = {this.props.favoritesData} />
            </aside>
        )
    }
}