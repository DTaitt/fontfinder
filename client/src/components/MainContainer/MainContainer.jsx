// @flow
import React, { Component, Fragment } from "react";
import axios from "axios";

import Main from './../Main/Main';
import store from './../../redux/store';
import { initializeFontData, updateFontDataLoadedStatus, initializeFavData , updateFavDataLoadedStatus} from "./../../redux/actions";

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
    store.dispatch(initializeFontData(updatedRes.slice(0,72)))
    store.dispatch(updateFontDataLoadedStatus())
  }

  async fetchToFavoritesAPI() {
    const res = await axios.get(`/favorites`);
    store.dispatch(initializeFavData(res.data))
    store.dispatch(updateFavDataLoadedStatus())
  }

  render() {
    return (
        <Fragment>
            <Main />
        </Fragment>
    );
  }
}
