import React, { Component } from 'react';
import FavCard from './FavCard'

export default class Sidebar extends Component{
    render() {
        return(
            <aside className="sidebar">
                <FavCard favoritesData = {this.props.favoritesData} deleteFavorite={this.props.deleteFavorite} />
            </aside>
        )
    }
}