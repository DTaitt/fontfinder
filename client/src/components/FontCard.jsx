import React, {Component} from 'react';
import axios from 'axios';

import Card from 'material-ui/Card';

export default class FontCard extends Component{

    // createIdea = async (idea, index) => {
    //     try {
    //         const newIdeaResponse = await axios.post(`/ideas`, idea)

    //         const updatedIdeasList = [...this.state.ideas]
    //         updatedIdeasList.push(newIdeaResponse.data)
    //         this.setState({ideas: updatedIdeasList})

    //     } catch(error) {
    //         console.log('Error creating new User!')
    //         console.log(error)
    //     }
    // }

    

    render(){
        return(
            <Card 
                className="font-card"
                onClick={
                        () => {
                            console.log('clicked')
                            this.props.addFavorite({
                                id: this.props.id,
                                family: this.props.family,
                                category: this.props.category,
                                url: this.props.url
                            })
                        }
                    }
            >
                <a href={this.props.url} target='_'>
                    <h1 className="family">{this.props.family}</h1>
                </a>
                <p className="category">{this.props.category}</p>
                <i 
                    className="fas fa-heart"
                    // onClick={() => {this.addToFavorites(this.props)}}
                    
                ></i>
            </Card>
        )
    }
}