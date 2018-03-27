import React, {Component} from 'react';
import Card from 'material-ui/Card';

export default class FontCard extends Component{
    render(){
        return(
            <Card className="font-card">
                <h1 className="family">{this.props.family}</h1>
                <p className="category">{this.props.category}</p>
                <a href={this.props.url} target='_'>Link</a>
            </Card>
        )
    }
}