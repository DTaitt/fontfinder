import React, { Component } from 'react';
import axios from 'axios';
import {ProgressBar} from 'react-materialize';
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
             
        //sets isInFav to true if the favorite object is already in favorites
        let isInFav = false;
        for(let i = 0; i < this.state.favData.length; i++){
            (newFav.id === this.state.favData[i].id) && (isInFav = true)
        }

        //adds the favorite object if its not already added to favorites
        (isInFav === false) 
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
                <div className="my-container">
                    {
                        this.state.isFontsDataLoaded
                        ? <CardDisplay 
                            fontsData = {this.state.fontsData} 
                            addFavorite={this.addFavorite} 
                            searchQuery={this.state.searchQuery} 
                            categoryValue={this.state.categoryValue} 
                            variantValues={this.state.variantValues} 
                        />
                        : <ProgressBar/>
                    }
                    {   
                        this.state.isfavDataLoaded
                        &&
                        <Sidebar 
                            favData = {this.state.favData} 
                            deleteFavorite={this.deleteFavorite} 
                            handleSearch={this.handleSearch} 
                            handleCategory={this.handleCategory} 
                            handleVariants={this.handleVariants} 
                        />
                    }
                </div>
            </main>
        )
    }
}