// @flow
import React, {Fragment} from "react";

import CardDisplay from './CardDisplay/CardDisplay';
import store from './../redux/store';
// import {searchValue} from '../redux/reducers';

type Props = {
  fontData: Object[],
  addFavorite(newFav: Object): Promise<void>,
  deleteFavorite(id: string): Promise<void>,
  searchQuery: string,
  categoryValue: string,
  variantValues: string[],
};

export default function CardDisplayContainer(props: Props) {
  return (
      <Fragment>
        <CardDisplay 
        />
      </Fragment>
  );
}
