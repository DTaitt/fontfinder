import React, { Component } from 'react';
import axios from 'axios';

import CardDisplay from './CardDisplay';
import Sidebar from './Sidebar';

export default class Main extends Component {

    state = {
        fontsData:[],
        isFontsDataLoaded: false,
        favData:[],
        isfavDataLoaded:false,
        test:0
    }

    addFavorite = this.addFavorite.bind(this);
    deleteFavorite = this.deleteFavorite.bind(this);

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
            favData: res.data,
            isfavDataLoaded: true,
        })
    }

    async addFavorite(fav) {
        try {
            await axios.post(`/favorites`, fav);
        } catch (error) {   
            console.log(error)
        }
        this.setState((prevState)=> ({
            favData: [...prevState.favData, fav],
        }))
        
    }

    async deleteFavorite(id) {
        try {
            await axios.delete(`/favorites/${id}`)
        } catch (error) {
            console.log(`Error deleting Idea with ID of ${id}`)
            console.log(error)
        }

        this.setState((prevState) =>({
            favData: prevState.favData.filter((fav) => {
                return fav.id !== id;
            })        
        }))
    }

    render() {
        console.log(this.state)
        return(
            <main>
                {
                    // displays the container div only if the fonts data and favorites data is loaded
                    (
                        this.state.isFontsDataLoaded  && this.state.isfavDataLoaded
                    )  
                    &&
                    (
                        <div className="container">
                            <CardDisplay fontsData = {this.state.fontsData} addFavorite={this.addFavorite} />
                            <Sidebar favData = {this.state.favData} deleteFavorite={this.deleteFavorite} />
                        </div>
                    )
                }
            </main>
        )
    }
}