import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './Main.css';

import CardDisplay from './CardDisplay';
import Sidebar from './Sidebar';

export default class Main extends Component {

    state = {
        fontsData:[],
        isFontsDataLoaded: false,
        favData:[],
        isfavDataLoaded:false,
        searchQuery: '',
        categoryValue: '',
        variantValues: [],
    }

    addFavorite = this.addFavorite.bind(this);
    deleteFavorite = this.deleteFavorite.bind(this);
    handleSearch = this.handleSearch.bind(this);
    handleCategory = this.handleCategory.bind(this);
    handleVariants = this.handleVariants.bind(this);

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

    async addFavorite(newFav) {
        try {
            await axios.post(`/favorites`, newFav);
        } catch (error) {   
            console.log(error)
        }
             
        let isInFav = null;

        for(let i = 0; i < this.state.favData.length; i++){
            (newFav.id === this.state.favData[i].id) && (isInFav = true)
        }

        (isInFav === null) 
        && 
        this.setState(prevState => ({
            favData: [...prevState.favData, newFav],
        })); 
        
    }

    async deleteFavorite(id) {
        try {
            await axios.delete(`/favorites/${id}`)
        } catch (error) {
            console.log(`Error deleting Idea with ID of ${id}`)
            console.log(error)
        }

        this.setState((prevState) => ({
            favData: prevState.favData.filter((fav) => {
                return fav.id !== id;
            })        
        }))
    }

    handleSearch(searchQuery: string) {
        this.setState({
            searchQuery: searchQuery,
        })
    }

    handleCategory(categoryValue: string) {
        this.setState({
            categoryValue: categoryValue,
        })
    }

    handleVariants(variantValues: string) {
        this.setState({
            variantValues: variantValues,
        })
    }

    render() {
        return(
            <main>
                {
                    // displays the container div only if the fonts data and favorites data is loaded
                    (
                        this.state.isFontsDataLoaded  && this.state.isfavDataLoaded
                    )  
                    &&
                    (
                        <div className="my-container">
                            <CardDisplay fontsData = {this.state.fontsData} addFavorite={this.addFavorite} searchQuery={this.state.searchQuery} categoryValue={this.state.categoryValue} variantValues={this.state.variantValues} />
                            <Sidebar favData = {this.state.favData} deleteFavorite={this.deleteFavorite} handleSearch={this.handleSearch} handleCategory={this.handleCategory} handleVariants={this.handleVariants} />
                        </div>
                    )
                }
            </main>
        )
    }
}