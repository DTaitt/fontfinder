import React, { Component } from 'react';
import axios from 'axios';

import CardDisplay from './CardDisplay';
import Sidebar from './Sidebar';

export default class Main extends Component {

    state = {
        fontsData:[],
        isFontsDataLoaded: false,
        favoritesData:[],
        isFavoritesDataLoaded:false,
    }

    componentDidMount() {
        this.fetchFontsData('popularity');
        this.fetchToFavoritesAPI();
    }

    async fetchFontsData(sortType) {
        let res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${sortType}&key= AIzaSyAOVSz0lHeFAs7ll5LO6HTADinYVxy1vt4`)
        this.setState({
            fontsData: res.data.items.slice(99),
            isFontsDataLoaded: true,
        })
    }

    async fetchToFavoritesAPI() {
        let res = await axios.get(`/favorites`);
        this.setState({
            favoritesData: res.data,
            isFavoritesDataLoaded: true,
        })
    }

    async addFavorite(fav) {
        console.log(fav)
        try {
            let newFav = await axios.get(`/favorites`, {
                family: this.props.family,
                category: this.props.category,
                url: this.props.url,
            });
            console.log(newFav)
        } catch (error) {   
            console.log(error)
        }
    }

    async deleteFavorite(id) {
        try {
            await axios.delete(`/favorites/${id}`)
            
            // const updatedFavoritesList = [...this.state.favoritesData]
            // updatedFavoritesList.splice(index, 1)
            // this.setState({favoritesData: updatedFavoritesList})

        } catch (error) {
            console.log(`Error deleting Idea with ID of ${id}`)
            console.log(error)
        }
}

    render() {
        console.log(this.state)
        return(
            <main>
                <div className="container">
                    {
                        this.state.isFontsDataLoaded === true
                        ? <CardDisplay fontsData = {this.state.fontsData} addFavorite={this.addFavorite} />
                        : null
                    }
                    {
                        this.state.isFavoritesDataLoaded === true
                        ? <Sidebar favoritesData = {this.state.favoritesData} deleteFavorite={this.deleteFavorite} />
                        : null
                    }     
                </div>
            </main>
        )
    }
}