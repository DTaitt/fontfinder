// @flow
import React, { Component, Fragment } from "react";
import store from './../redux/store'
import FilterCard from './FilterCard/FilterCard';

type Props = {
  handleSearch(searchQuery: string): void,
  handleCategory(categoryValue: string): void,
  handleVariants(variantValues: string[]): void
};

type State = {
  value: string,
  categoryValue: string,
  variantValues: string[]
};

export default class FilterCardContainer extends Component<Props, State> {
  state: State = {
    value: "",
    categoryValue: "sans-serif",
    variantValues: []
  };

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

  // handleSearchInputChange = this.handleSearchInputChange.bind(this);
  handleCategoryInputChange = this.handleCategoryInputChange.bind(this);
  handleVariantInputChange = this.handleVariantInputChange.bind(this);

  handleSearchInputChange(e: any) {
    store.dispatch({
      type: 'UPDATE_SEARCH_VALUE',
      value: e.target.value.toLowerCase()
    })
  }

  handleCategoryInputChange(e: any) {
    store.dispatch({
      type: "UPDATE_CATEGORY_VALUE",
      value: e.target.value.toLowerCase()
    });
  }

  handleVariantInputChange(e: any) {
    e.persist();

    // // if an element variant value isn't in the arry it adds it
    // if (this.state.variantValues.includes(e.target.value) === false) {
    //   this.setState(
    //     prevState => ({
    //       variantValues: [...prevState.variantValues, e.target.value]
    //     }),
    //     () => {
    //       this.props.handleVariants(this.state.variantValues);
    //     }
    //   );
    // } else {
    //   // if it's already in the array, it removes it
    //   this.setState(
    //     prevState => ({
    //       variantValues: prevState.variantValues.filter(variant => {
    //         return variant !== e.target.value;
    //       })
    //     }),
    //     () => {
    //       this.props.handleVariants(this.state.variantValues);
    //     }
    //   );
    // }

    if (store.getState().variantValues.includes(e.target.value) === false) {
      store.dispatch({
        type: "ADD_VARIANT_VALUE",
        value: e.target.value.toLowerCase(),
      });
    } else {
      store.dispatch({
        type: 'REMOVE_VARIANT_VALUE',
        value: e.target.value.toLowerCase(),
      })
    }
    console.log(store.getState().variantValues)
  }

  render() {
    return (
        <Fragment>
            <FilterCard 
                handleSearch={this.props.handleSearch} 
                handleSearchInputChange={this.handleSearchInputChange}
                handleCategory={this.props.handleCategory} 
                handleCategoryInputChange={this.handleCategoryInputChange}
                handleVariants = {this.props.handleVariants} 
                handleVariantInputChange={this.handleVariantInputChange}
                value={this.state.categoryValue}
                variantValues={this.state.variantValues}
                categoryValue={this.state.categoryValue}
                categoryOptions={this.categoryOptions}
                variantOptions={this.variantOptions}
            />
        </Fragment>
    );
  }
}
