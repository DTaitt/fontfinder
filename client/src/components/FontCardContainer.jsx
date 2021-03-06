// @flow
import React, { Fragment } from "react";
import axios from 'axios'
import store from './../redux/store';

import FontCard from './FontCard/FontCard';
import { updateFontDataFavStatus, addFavData } from "../redux/actions";

type Props = {
  id: string,
  family: string,
  category: string,
  url: string,
  variants: string[],
  isInFav: boolean,
};

export default function FontCardContainer(props:Props) {

    // FORMATTING FONT FAMILY IN MODAL
    let formattedFontFamily: string = props.family;
  
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
        let currentFav = store.getState().favData.find(fav => {
          return fav.id === props.id;
        });

        if(!currentFav) {
            store.dispatch(addFavData(fav));
            store.dispatch(updateFontDataFavStatus(props.id))  
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
