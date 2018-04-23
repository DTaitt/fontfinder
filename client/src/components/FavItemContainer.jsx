// @flow
import React, {Fragment} from "react";
import FavItem from './FavItem/FavItem';

import axios from "axios";
import store from './../redux/store'
import { removeFavData } from "../redux/actions";

type Props = {
  id: string,
  family: string,
  category: string,
  url: string,
};

export default function FavItemContainer(props: Props) {
    // FORMAT FONT FAMILY
    let formattedFontFamily: string = props.family;

    function formatFontFamily() {
        let splitFontFamily = props.family.split(" ");
        let joinedFontFamily = splitFontFamily.join("+");
        formattedFontFamily = joinedFontFamily;
    }

    formatFontFamily();

    // SETUP DELETE FAV FUNCTION
    const fontData = store.getState().fontData;

    const currentFav = fontData.find(font => {
        return font.family === props.family
    })

    async function deleteFavorite(id: string) {
        try {
            await axios.delete(`/favorites/${id}`);
        } catch (error) {
            console.log(`Error deleting Idea with ID of ${id}`);
            console.log(error);
        }

        store.dispatch(removeFavData(id))
    }

    return (
        <Fragment>
            <FavItem 
                id = {props.id}
                family = {props.family}
                category = {props.category}
                url = {`https://fonts.google.com/specimen/${props.family}`}
                formattedFontFamily = {formattedFontFamily}
                deleteFavorite={deleteFavorite}
                currentFav={currentFav}
            />
        </Fragment>
    );
}
