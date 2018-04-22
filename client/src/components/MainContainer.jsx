// @flow
import React, { Component, Fragment } from "react";
import axios from "axios";

import Main from './Main/Main';
import store from './../redux/store';
import {isFontDataLoaded, fontData} from '../redux/reducers';

type Props = {};
type State = {};

export default class MainContainer extends Component<Props, State> {

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
      data: updatedRes.slice(0,12),
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

  render() {
    return (
        <Fragment>
            <Main />
        </Fragment>
    );
  }
}
