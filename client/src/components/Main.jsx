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

    render() {
        return(
            <main>
                <div className="container">
                    {
                        this.state.isFontsDataLoaded === true
                        ? <CardDisplay fontsData = {this.state.fontsData} />
                        : null
                    }
                    {
                        this.state.isFavoritesDataLoaded === true
                        ? <Sidebar favoritesData = {this.state.favoritesData} />
                        : null
                    }     
                </div>
            </main>
        )
    }
}