// @flow
import React, { Component, Fragment } from "react";
import axios from "axios";
import { ProgressBar } from "react-materialize";

import Main from './Main/Main';
import store from './../redux/store';

type Props = {};
type State = {
  fontData: Object[],
  isFontsDataLoaded: boolean,
  favData: Object[],
  isfavDataLoaded: boolean,
  searchQuery: string,
  categoryValue: string,
  variantValues: string[]
};

export default class MainContainer extends Component<Props, State> {
  state: State = {
    fontData: [],
    isFontsDataLoaded: false,
    favData: [],
    isfavDataLoaded: false,
    searchQuery: "",
    categoryValue: "",
    variantValues: []
  };

  // addFavorite = this.addFavorite.bind(this);
  // deleteFavorite = this.deleteFavorite.bind(this);
  // handleSearch = this.handleSearch.bind(this);
  // handleCategory = this.handleCategory.bind(this);
  // handleVariants = this.handleVariants.bind(this);

  componentDidMount() {
    this.fetchFontsData("popularity");
    this.fetchToFavoritesAPI();
  }

  async fetchFontsData(sortType: string) {
    const res = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=${sortType}&key= AIzaSyAOVSz0lHeFAs7ll5LO6HTADinYVxy1vt4`
    );
    const updatedRes = res.data.items.map((font:Object) => {
      return {...font, isInFav: false }
    })
    store.dispatch({
      type: 'INITIALIZE_FONT_DATA',
      data: updatedRes.slice(0,36),
    })
    store.dispatch({
      type: 'UPDATE_FONT_DATA_LOADED_STATUS',
    })
  }

  async fetchToFavoritesAPI() {
    const res = await axios.get(`/favorites`);
    store.dispatch({
      type: 'INITIALIZE_FAV_DATA',
      data: res.data,
    })
    store.dispatch({
      type: 'UPDATE_FAV_DATA_LOADED_STATUS'
    })
  }

  // async addFavorite(newFav: Object) {
  //   //console.log('test')
  //   try {
  //     await axios.post(`/favorites`, newFav);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   //sets isInFav to true if the favorite object is already in favorites
  //   let isInFav = false;
  //   for (let i = 0; i < store.getState().favData; i++) {
  //     newFav.id === store.getState().favData[i].id && (isInFav = true);
  //   }

  //   //adds the favorite object if its not already added to favorites
  //   isInFav === false &&
  //     // this.setState(prevState => ({
  //     //   favData: [...prevState.favData, newFav]
  //     // }));
  //     store.dispatch({
  //     type: 'ADD_FAV_DATA',
  //     data: newFav,
  //   })
  //   //console.log(store.getState())
  // }

  // async deleteFavorite(id: string) {
  //   try {
  //     await axios.delete(`/favorites/${id}`);
  //   } catch (error) {
  //     console.log(`Error deleting Idea with ID of ${id}`);
  //     console.log(error);
  //   }

  //   this.setState(prevState => ({
  //     favData: prevState.favData.filter(fav => {
  //       return fav.id !== id;
  //     })
  //   }));
  // }

  handleSearch(searchQuery: string) {
    this.setState({
      searchQuery: searchQuery
    });
  }

  handleCategory(categoryValue: string) {
    this.setState({
      categoryValue: categoryValue
    });
  }

  handleVariants(variantValues: string[]) {
    this.setState({
      variantValues: variantValues
    });
  }

  render() {
    return (
        <Fragment>
            {
                store.getState().isFontDataLoaded// && store.getState().isFavDataLoaded
                ? <Main 
                    fontData={store.getState().fontData}
                    // addFavorite={this.addFavorite}
                    // deleteFavorite={this.deleteFavorite}
                    // searchQuery={this.state.searchQuery}
                    // categoryValue={this.state.categoryValue}
                    // variantValues={this.state.variantValues}
                    // favData={store.getState().favData}
                    // handleSearch={this.handleSearch}
                    // handleCategory={this.handleCategory}
                    // handleVariants={this.handleVariants}
                />
                : <p>Loading...</p>
            }
        </Fragment>
    );
  }
}
