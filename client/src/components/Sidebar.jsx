import React, { Component } from 'react';
import FavCard from './FavCard'

export default class Sidebar extends Component{
    render() {
        return(
            <aside className="sidebar">
                <FavCard favData = {this.props.favData} deleteFavorite={this.props.deleteFavorite} />
            </aside>
        )
    }
}