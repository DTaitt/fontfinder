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

export default function FontCardContainer(props) {

    // FORMATTING FONT FAMILY IN MODAL
    let formattedFontFamily: string = props.family;
    const favData = store.getState().favData;
    const found = store.getState().favData.find((fav) => {
        return fav.id === props.id;
    })
  
    function formatFontFamily() {
      let splitFontFamily = props.family.split(" ");
      let joinedFontFamily = splitFontFamily.join("+");
      formattedFontFamily = joinedFontFamily;
    }
    
    formatFontFamily()

    // ADD FAVORITE FUNCTION
    const newFav:newFav = {
        id: props.id,
        family: props.family,
        category: props.category,
        url: props.url,
    }

    async function addFavorite(fav) {
        try {
            await axios.post(`/favorites`, fav);
        } catch (error) {
            console.log(error);
        }

        //adds the favorite object if its not already added to favorites
        const newFav:newFav = {
            id: props.id,
            family: props.family,
            category: props.category,
            url: props.url,
        }

        let found = store.getState().favData.find(fav => {
          return fav.id === props.id;
        });

        if(!found) {
            store.dispatch({
                type: "ADD_FAV_DATA",
                new: newFav,
            });
    
            store.dispatch({
                type: 'UPDATE_FONT_DATA_FAV_STATUS',
                id: props.id,
            })  
        }
    }

    // FORMATTING VARIANT OPTIONS FOR DROPDOWN
    const variantOptions:Object[] = [
        { value: "100", label: "Thin" },
        { value: "100italic", label: "Thin Italic" },
        { value: "200", label: "Extra-Light" },
        { value: "200italic", label: "Extra-Light Italic" },
        { value: "300", label: "Light" },
        { value: "300italic", label: "Light Italic" },
        { value: "regular", label: "Regular" },
        { value: "italic", label: "Italic" },
        { value: "500", label: "Medium" },
        { value: "500italic", label: "Medium Italic" },
        { value: "600", label: "Semi-Bold" },
        { value: "600italic", label: "Semi-Bold Italic" },
        { value: "700", label: "Bold" },
        { value: "700italic", label: "Bold Italic" },
        { value: "800", label: "Extra-Bold" },
        { value: "800italic", label: "Extra-Bold Italic" },
        { value: "900", label: "Black" },
        { value: "900italic", label: "Black Italic" }
    ];

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
                addFavorite = {addFavorite}
                newFav = {newFav}
                variantOptions={variantOptions}
            />
        </Fragment>
    )
}
