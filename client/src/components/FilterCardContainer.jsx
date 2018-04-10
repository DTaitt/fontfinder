// @flow
import React, { Component, Fragment } from "react";

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

  handleSearchInputChange = this.handleSearchInputChange.bind(this);
  handleCategoryInputChange = this.handleCategoryInputChange.bind(this);
  handleVariantInputChange = this.handleVariantInputChange.bind(this);

  handleSearchInputChange(e: any) {
    this.setState(
      {
        value: e.target.value
      },
      () => {
        this.props.handleSearch(this.state.value.toLowerCase());
      }
    );
  }

  handleCategoryInputChange(e: any) {
    this.setState(
      {
        categoryValue: e.target.value
      },
      () => {
        this.props.handleCategory(this.state.categoryValue.toLowerCase());
      }
    );
  }

  handleVariantInputChange(e: any) {
    e.persist();

    // if an element variant value isn't in the arry it adds it
    if (this.state.variantValues.includes(e.target.value) === false) {
      this.setState(
        prevState => ({
          variantValues: [...prevState.variantValues, e.target.value]
        }),
        () => {
          this.props.handleVariants(this.state.variantValues);
        }
      );
    } else {
      // if it's already in the array, it removes it
      this.setState(
        prevState => ({
          variantValues: prevState.variantValues.filter(variant => {
            return variant !== e.target.value;
          })
        }),
        () => {
          this.props.handleVariants(this.state.variantValues);
        }
      );
    }
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
