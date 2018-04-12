// @flow
import React, {Fragment} from "react";
import FavItem from './FavItem/FavItem';

type Props = {
  id: string,
  family: string,
  category: string,
  url: string,
  deleteFavorite(id: string): Promise<void>
};

export default function FavItemContainer(props: Props) {
    let formattedFontFamily: string = props.family;

    function formatFontFamily() {
        let splitFontFamily = props.family.split(" ");
        let joinedFontFamily = splitFontFamily.join("+");
        formattedFontFamily = joinedFontFamily;
    }

    formatFontFamily();
    console.log(props)
    return (
        <Fragment>
            <FavItem 
                id = {props.id}
                family = {props.family}
                category = {props.category}
                url = {`https://fonts.google.com/specimen/${formattedFontFamily}`}
                deleteFavorite={props.deleteFavorite}
                formattedFontFamily={formattedFontFamily}
            />
        </Fragment>
    );
}
