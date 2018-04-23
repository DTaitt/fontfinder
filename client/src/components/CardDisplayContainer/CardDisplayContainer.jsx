// @flow
import React, {Fragment} from "react";

import CardDisplay from './../CardDisplay/CardDisplay';
import store from './../../redux/store';

type Props = {}

export default function CardDisplayContainer(props: Props) {

  let fontData = store.getState().fontData;
  let searchValue = store.getState().searchValue;
  let categoryValue = store.getState().categoryValue;
  let variantValues = store.getState().variantValues;

  function filterOnSearchQuery() {
      (searchValue === '')
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

  return (
      <Fragment>
        <CardDisplay 
          fontData = {fontData}
        />
      </Fragment>
  );
}
