import React, { Component } from 'react';
import {Row, Input, Icon, Collection, CollectionItem} from 'react-materialize';

import './FilterCard.css';

export default class FilterCard extends Component {
    render() {
        return (
             <div className="filter-card">
                <Collection>
                    <CollectionItem className='search'>
                        <h2>Search</h2>
                        <Row>
                            <Input s={6} label="Search" validate></Input>
                        </Row>
                    </CollectionItem>
                    <CollectionItem className='category'>
                        <h2>Category</h2>
                        <Row>
                            <Input name='group1' type='checkbox' value='serif' label='serif' />
                            <Input name='group1' type='checkbox' value='sans-serif' label='sans-serif'/>
                            <Input name='group1' type='checkbox' value='another category' label='another category' className='filled-in'/>
                        </Row>
                    </CollectionItem>
                    <CollectionItem className='sort'>
                        <h2>Sort</h2>
                        <Row>
                            <Input s={12} type='select' label="sort by" defaultValue='2'>
                                <option value='alpha'>Alpha</option>
                                <option value='oopular'>Popular</option>
                                <option value='3'>Option 3</option>
                            </Input>
                        </Row>
                    </CollectionItem>
                </Collection>
             </div>
        )
    }
}