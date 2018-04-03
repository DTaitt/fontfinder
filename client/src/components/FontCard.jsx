import React, {Component} from 'react';
import axios from 'axios';

import './FontCard.css';

import {CardPanel, Button} from 'react-materialize';

export default class FontCard extends Component{

    render(){
        return(
            <CardPanel 
                className="font-card teal lighten-4 black-text z-depth-2"
            >
                <a href={this.props.url} target='_'>
                    <h1 className="family">{this.props.family}</h1>
                </a>
                <p className="category">{this.props.category}</p>
                <Button 
                    floating 
                    // small 
                    className='red' 
                    waves='light' 
                    icon='favorite' 
                    onClick={
                        () => {
                             this.props.addFavorite({
                                id: this.props.id,
                                family: this.props.family,
                                category: this.props.category,
                                url: this.props.url
                            })
                        }
                    }
                />
            </CardPanel>
        )
    }
}