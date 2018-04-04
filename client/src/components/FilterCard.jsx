import React, { Component } from 'react';
import {Row, Input, Icon, Collection, CollectionItem} from 'react-materialize';

import './FilterCard.css';

export default class FilterCard extends Component {

    state: State = {
        value: '',
        categoryValue: 'sans-serif',
    }

    handleSearchInputChange = this.handleSearchInputChange.bind(this);
    handleCategoryInputChange = this.handleCategoryInputChange.bind(this);

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
    
    render() {
        // console.log(this.state)
        return <div className="filter-card">
            <Collection>
              <CollectionItem className="search">
                <Row>
                  <Input s={6} label="Search" validate onChange={this.handleSearchInputChange} />
                </Row>
              </CollectionItem>
              <CollectionItem className="Categories">
                <Row>
                  <Input s={12} type="select" label="Category Type" defaultValue="0" onChange={this.handleCategoryInputChange}>
                    <option value="">Choose a Category</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="display">Display</option>
                    <option value="handwriting">Handwriting</option>
                    <option value="monospace">Monospace</option>
                  </Input>
                </Row>
              </CollectionItem>
              {/* <CollectionItem className='variant'>
                    <Row>
                        <Input name='group1' type='checkbox' value='100' label='Thin' />
                        <Input name='group1' type='checkbox' value='100italic' label='Thin Italic'/>
                        <Input name='group1' type='checkbox' value='200' label='Extra-Light'/>
                        <Input name='group1' type='checkbox' value='200italic' label='Extra-Light Italic'/>
                        <Input name='group1' type='checkbox' value='300' label='Light'/>
                    </Row>
                </CollectionItem>  */}
              <CollectionItem className="sort">
                <Row>
                  <Input s={12} type="select" label="sort by" defaultValue="2">
                    <option value="alpha">Alpha</option>
                    <option value="oopular">Popular</option>
                    <option value="3">Option 3</option>
                  </Input>
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