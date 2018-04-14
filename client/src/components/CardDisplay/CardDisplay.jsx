// @flow
import React, {Component} from 'react';
import './CardDisplay.css';

import FontCardContainer from './../FontCardContainer';
import store from './../../redux/store';

type Props = {
  fontData: Object[],
  addFavorite(newFav: Object): Promise<void>,
  deleteFavorite(id: string): Promise<void>,
  searchQuery: string,
  categoryValue: string,
  variantValues: string[]
};

type State = {
    currentFontsData: Object[],
}

export default function CardDisplay (props) {

    let fontData = store.getState().fontData;
    let searchValue = store.getState().searchValue;
    let categoryValue = store.getState().categoryValue;
    let variantValues = store.getState().variantValues;

    function filterOnSearchQuery() {
        searchValue === ''
        ? fontData
        : fontData = fontData.filter((font) => {
            return font.family.toLowerCase().indexOf(searchValue) !== -1;
        })
        
    }

    function filterOnCategoryValue() {
        categoryValue === "view all"
        ? fontData
        : fontData = fontData.filter(font => {
            return font.category === categoryValue;
        });
    }

    function filterOnVariantValues() {
        let unfilteredFontData = [];

        //finds fonts that have a certain variant e.g. 600italic and adds it to unfilteredFontData
        function addToUnfilteredFontData(variant: string) {
            unfilteredFontData = [
                ...unfilteredFontData,
                ...fontData.filter(font => {
                return font.variants.indexOf(variant) !== -1;
                })
            ];
        }

        //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
        //removes the duplicated values that might occur e.g a font having a 600italic variant AND a 700italic variant
        function removeDuplicateFonts(value, index, self) {
            return self.indexOf(value) === index;
        }

        variantValues.forEach(addToUnfilteredFontData);

        fontData = unfilteredFontData.filter(removeDuplicateFonts);
        console.log(fontData)
    }

    // only runs these functions when a query is sent
    filterOnSearchQuery();
    filterOnCategoryValue();
    variantValues.length > 0 && filterOnVariantValues();
    // console.log(fontData)

    // render() {
        // console.log(store.getState().fontData)
        return(
            <section className="card-display">
                {
                    fontData.map((font) => {
                    // this.state.currentFontsData.map((font) => {
                        return (
                            <FontCardContainer 
                                key = {font.family}
                                id = {font.family}
                                family = {font.family}
                                category = {font.category}
                                url = {`https://fonts.google.com/specimen/${font.family}`}
                                addFavorite={props.addFavorite}
                                deleteFavorite={props.deleteFavorite}
                                variants = {font.variants}
                            />
                        )
                    })
                }
            </section>
        )
    // }
}