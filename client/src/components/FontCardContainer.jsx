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

export default function FontCardContainer(props) {

  let formattedFontFamily: string = props.family;

  function formatFontFamily() {
      let splitFontFamily = props.family.split(" ");
      let joinedFontFamily = splitFontFamily.join("+");
      formattedFontFamily = joinedFontFamily;
  }

  formatFontFamily()

  return (
      <Fragment>
          <FontCard 
              id = {props.family}
              family = {props.family}
              category = {props.category}
              url = {`https://fonts.google.com/specimen/${props.family}`}
              variants = {props.variants}
              isInFav = {props.isInFav}
              formattedFontFamily = {formattedFontFamily}
          />
      </Fragment>
  );
}
