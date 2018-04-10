// @flow
import React, {Component} from 'react';
import './CardDisplay.css';

import FontCardContainer from './../FontCardContainer';

type Props = {
    fontsData: Object[],
    addFavorite():Promise<void>,
    searchQuery: string, 
    categoryValue: string,
    variantValues: string[],
    variants: string[]
}

export default class DisplayPanel extends Component<Props, State> {

    state = {
        currentFontsData: this.props.fontsData,
    }

    componentWillReceiveProps(nextProps){
        nextProps.fontsData !== this.props.fontsData 
        && 
        this.setState({
            currentFontsData: nextProps.fontsData,
        })
    }

    render() {
        return(
            <section className="card-display">
                {
                    this.state.currentFontsData.map((font) => {
                        return (
                            <FontCardContainer 
                                key = {font.family}
                                id = {font.family}
                                family = {font.family}
                                category = {font.category}
                                url = {`https://fonts.google.com/specimen/${font.family}`}
                                addFavorite={this.props.addFavorite}
                                deleteFavorite={this.props.deleteFavorite}
                                variants = {font.variants}
                            />
                        )
                    })
                }
            </section>
        )
    }
}