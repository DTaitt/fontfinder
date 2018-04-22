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
  isInFav: boolean,
};

export default class FontCardContainer extends Component {

    formattedFontFamily: string = this.props.family;
    favData = store.getState().favData;
    //   console.log(favData)
    found = store.getState().favData.find((fav) => {
        return fav.id === this.props.id;
    })

    componentDidMount() {
        this.formatFontFamily();
    }
    
    componentDidUpdate(prevProps, prevState) {
        // (this.found && this.props.isInFav === false)
        // && 
        // // console.log(this.props.isInFav)
        // store.dispatch({
        //   type: "UPDATE_FONT_DATA_FAV_STATUS",
        //   id: this.props.id
        // }); 
    }
  
    formatFontFamily() {
      let splitFontFamily = this.props.family.split(" ");
      let joinedFontFamily = splitFontFamily.join("+");
      this.formattedFontFamily = joinedFontFamily;
    }
        
    render() {
        // console.log(`Font Card Container fav status is ${this.props.isInFav.toString()}`)
        // console.log(store.getState().favData)
        return (
             <Fragment>
                <FontCard 
                    id = {this.props.family}
                    family = {this.props.family}
                    category = {this.props.category}
                    url = {`https://fonts.google.com/specimen/${this.props.family}`}
                    variants = {this.props.variants}
                    isInFav = {this.props.isInFav}
                    formattedFontFamily = {this.formattedFontFamily}
                />
            </Fragment>
        )
    }
}
