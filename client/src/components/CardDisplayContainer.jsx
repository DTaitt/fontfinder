// @flow
import React, {Fragment} from "react";

import CardDisplay from './CardDisplay/CardDisplay';
import store from './../redux/store';
// import {searchValue} from '../redux/reducers';

type Props = {}

export default function CardDisplayContainer(props: Props) {
  return (
      <Fragment>
        <CardDisplay />
      </Fragment>
  );
}
