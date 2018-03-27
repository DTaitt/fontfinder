import React, {Component} from 'react';

export default class FontCard extends Component{
    render(){
        return(
            <div className="font-card">
                <h1 className="family">{this.props.family}</h1>
                <p className="category">{this.props.category}</p>
                <a href={this.props.url} target='_'>Link</a>
            </div>
        )
    }
}