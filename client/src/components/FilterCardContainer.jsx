// @flow
import React, { Component, Fragment } from "react";
import store from './../redux/store'
import FilterCard from './FilterCard/FilterCard';
import { updateSearchValue, updateCategoryValue, addVariantValue , removeVariantValue} from "../redux/actions";

type Props = {}

type State = {}

export default class FilterCardContainer extends Component<Props, State> {

  categoryOptions: string[] = [
    "view all",
    "sans-serif",
    "serif",
    "display",
    "handwriting",
    "monospace"
  ];
  
  variantOptions: Object[] = [
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

  handleSearch(e: any) {
    store.dispatch(updateSearchValue(e.target.value.toLowerCase()))
  }

  handleCategory(e: any) {
    store.dispatch(updateCategoryValue(e.target.value.toLowerCase()));
  }

  handleVariant(e: any) {
    e.persist();

    if (store.getState().variantValues.includes(e.target.value) === false) {
      store.dispatch(addVariantValue(e.target.value.toLowerCase()));
    } else {
      store.dispatch(removeVariantValue(e.target.value.toLowerCase()))
    }
  }

  render() {
    return (
        <Fragment>
            <FilterCard 
                handleSearch={this.handleSearch}
                handleCategory={this.handleCategory}
                handleVariant={this.handleVariant}
                categoryOptions={this.categoryOptions}
                variantOptions={this.variantOptions}
            />
        </Fragment>
    );
  }
}
