import React, { Component } from 'react';
import {Row, Input, Collection, CollectionItem} from 'react-materialize';

import './FilterCard.css';

export default class FilterCard extends Component {

    state: State = {
        value: '',
        categoryValue: 'sans-serif',
        variantValues: [],
    }

    handleSearchInputChange = this.handleSearchInputChange.bind(this);
    handleCategoryInputChange = this.handleCategoryInputChange.bind(this);
    handleVariantInputChange = this.handleVariantInputChange.bind(this);

    handleSearchInputChange(e: any) {
        this.setState({
            value: e.target.value,
        }
        , () => {
            this.props.handleSearch(this.state.value.toLowerCase())
        }
    )}

    handleCategoryInputChange(e: any) {
        this.setState({
            categoryValue: e.target.value,
        }
        , () => {
            this.props.handleCategory(this.state.categoryValue.toLowerCase())
        })
        // console.log(e.target.value)
    }

    handleVariantInputChange(e: any) {
        e.persist()

        // if an element variant value isn't in the arry it adds it
        if (this.state.variantValues.includes(e.target.value) === false) {
            this.setState((prevState) => ({
                variantValues: [...prevState.variantValues, e.target.value]
            })
            , () => {
                this.props.handleVariants(this.state.variantValues)
            })
        } else {
            // if it's already in the array, it removes it
            this.setState((prevState) => ({
                variantValues: prevState.variantValues.filter((variant) => {
                    return variant !== e.target.value;
                })
            }),() => {
                this.props.handleVariants(this.state.variantValues)
            })
        }
    }
    
    render() {
        // console.log(this.state)
        return <div className="filter-card">
            <Collection>
              <CollectionItem className="search">
                <Row>
                  <Input s={6} label="Search" validate onChange={this.handleSearchInputChange} />
                </Row>
              </CollectionItem>
              <CollectionItem className="sort">
                <Row>
                  <Input s={12} type="select" label="sort by" defaultValue="2">
                    <option value="alpha">Alpha</option>
                    <option value="oopular">Popular</option>
                    <option value="3">Option 3</option>
                  </Input>
                </Row>
              </CollectionItem>
              <CollectionItem className="Categories">
                <Row>
                  <Input s={12} type="select" label="Category Type" defaultValue="0" onChange={this.handleCategoryInputChange}>
                    <option value="">View All</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="display">Display</option>
                    <option value="handwriting">Handwriting</option>
                    <option value="monospace">Monospace</option>
                  </Input>
                </Row>
              </CollectionItem>
              <CollectionItem className='variant'>
                    <Row onChange={this.handleVariantInputChange}>
                        <Input name='group1' type='checkbox' value='100' label='Thin 100' />
                        <Input name='group1' type='checkbox' value='100italic' label='Thin 100 Italic'/>
                        <Input name='group1' type='checkbox' value='200' label='Extra-Light 200'/>
                        <Input name='group1' type='checkbox' value='200italic' label='Extra-Light 200 Italic'/>
                        <Input name='group1' type='checkbox' value='300' label='Light 300'/>
                        <Input name='group1' type='checkbox' value='300italic' label='Light 300 Italic'/>
                        <Input name='group1' type='checkbox' value='regular' label='Regular 400' />
                        <Input name='group1' type='checkbox' value='italic' label='Regular 400 Italic'/>
                        <Input name='group1' type='checkbox' value='500' label='Medium 500'/>
                        <Input name='group1' type='checkbox' value='500italic' label='Medium 500 Italic'/>
                        <Input name='group1' type='checkbox' value='600' label='Semi-Bold 600'/>
                        <Input name='group1' type='checkbox' value='600italic' label='Semi-Bold 600 Italic'/>
                        <Input name='group1' type='checkbox' value='700' label='Bold 700' />
                        <Input name='group1' type='checkbox' value='700italic' label='Bold 700 Italic'/>
                        <Input name='group1' type='checkbox' value='800' label='Extra-Bold 800'/>
                        <Input name='group1' type='checkbox' value='800italic' label='Extra-Bold 800 Italic'/>
                        <Input name='group1' type='checkbox' value='900' label='Black 900'/>
                        <Input name='group1' type='checkbox' value='900italic' label='Black 900 Italic'/>
                    </Row>
                </CollectionItem> 
            </Collection>
          </div>;
    }
}

// Thin
// Thin Italic
// Extra-Light
// Extra-Light Italic
// Light
// Light Italic
// Regular
// Regular Italic
// Medium
// Medium Italic
// Semi-Bold
// Semi-Bold Italic
// Bold
// Bold Italic
// Extra-Bold
// Extra-Bold Italic
// Black
// Black Italic