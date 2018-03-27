import React, {Component} from 'react';

export default class FontCard extends Component{
    render(){
        return(
            <div className="font-card">
                <h1>{this.props.family}</h1>
                <h2>{this.props.category}</h2>
                <a href={this.props.url} target='_'>Link</a>
            </div>
        )
    }
}