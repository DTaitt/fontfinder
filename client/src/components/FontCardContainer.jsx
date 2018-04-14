// @flow
import React, { Component, Fragment } from "react";
import axios from 'axios'
import store from './../redux/store';
import { toggleFavStatus } from './../redux/reducers';
import { UPDATE_FAV_STATUS } from './../redux/actions';

import FontCard from './FontCard/FontCard';

type Props = {
  id: string,
  family: string,
  category: string,
  url: string,
  variants: string[],
  addFavorite(newFav: Object): Promise<void>,
  deleteFavorite(id: string): Promise<void>,
};

type State = {
  formattedFontFamily: string,
  variants: string[],
  isInFav: boolean,
};

export default class FontCardContainer extends Component<Props, State> {
  render() {
    return (
        <Fragment>
            <FontCard 
                id = {this.props.family}
                family = {this.props.family}
                category = {this.props.category}
                url = {`https://fonts.google.com/specimen/${this.props.family}`}
                variants = {this.props.variants}
            />
        </Fragment>
    );
  }
}
