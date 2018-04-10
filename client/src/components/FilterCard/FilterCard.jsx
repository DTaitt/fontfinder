// @flow
import React, { Component } from 'react';
import './FilterCard.css';

import {Row, Input, Collection, CollectionItem} from 'react-materialize';

type Props = {
  handleSearch(searchQuery: string): void,
  handleCategory(categoryValue: string): void,
  handleVariants(variantValues: string[]): void,
};

export default function FilterCard(props:Props) {
    return (
        <div className="filter-card">
            <Collection>
                <CollectionItem className="search">
                    <Row>
                        <Input s={6} label="Search" validate onChange={props.handleSearchInputChange} />
                    </Row>
                </CollectionItem>
                <CollectionItem className="Categories">
                    <Row>
                        <Input 
                            s={12} 
                            type="select" 
                            label="Category Type" 
                            defaultValue="0" 
                            onChange={props.handleCategoryInputChange}
                        >
                            {
                                props.categoryOptions.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })
                            }
                        </Input>
                    </Row>
                </CollectionItem>
                <CollectionItem className='variant'>
                    <Row onChange={props.handleVariantInputChange}>
                        {
                            props.variantOptions.map((variant) => {
                                return (
                                    <Input 
                                        key={variant.value} 
                                        name={variant.value} 
                                        type="checkbox" 
                                        value={variant.value} 
                                        label={variant.label} 
                                    />
                                )
                            })
                        }
                    </Row>
                </CollectionItem> 
            </Collection>
        </div>
    )
}