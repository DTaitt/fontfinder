// @flow
import React, {Fragment} from "react";

import CardDisplay from './CardDisplay/CardDisplay';

type Props = {
  fontsData: Object[],
  addFavorite(): Promise<void>,
  searchQuery: string,
  categoryValue: string,
  variantValues: string[],
  variants: string[]
};

export default function CardDisplayContainer(props: Props) {
  let fontsData = props.fontsData;

  function filterOnSearchQuery() {
    fontsData = fontsData.filter(font => {
      return font.family.toLowerCase().indexOf(props.searchQuery) !== -1;
    });
  }

  function filterOnCategoryValue() {
    if (props.categoryValue === "view all") {
      return fontsData;
    } else {
      fontsData = fontsData.filter(font => {
        return font.category.indexOf(props.categoryValue) !== -1;
      });
    }
  }

  function filterOnVariantValues() {
    let unfilteredFontData = [];

    //finds fonts that have a certain variant e.g. 600italic and adds it to unfilteredFontData
    function addToUnfilteredFontData(variant: string) {
      unfilteredFontData = [
        ...unfilteredFontData,
        ...fontsData.filter(font => {
          return font.variants.indexOf(variant) !== -1;
        })
      ];
    }

    //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    //removes the duplicated values that might occur e.g a font having a 600italic variant AND a 700italic variant
    function removeDuplicateFonts(value, index, self) {
      return self.indexOf(value) === index;
    }

    props.variantValues.forEach(addToUnfilteredFontData);

    fontsData = unfilteredFontData.filter(removeDuplicateFonts);
  }

  // only runs these functions when a query is sent
  props.searchQuery !== "" && filterOnSearchQuery();
  props.categoryValue !== "" && filterOnCategoryValue();
  props.variantValues.length > 0 && filterOnVariantValues();

  return (
      <Fragment>
        <CardDisplay 
            fontsData = {fontsData} 
            addFavorite={props.addFavorite} 
            deleteFavorite={props.deleteFavorite}
            searchQuery={props.searchQuery} 
            categoryValue={props.categoryValue} 
            variantValues={props.variantValues} 
        />
      </Fragment>
  );
}
