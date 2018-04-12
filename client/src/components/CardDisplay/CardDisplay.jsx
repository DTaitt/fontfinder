// @flow
import React, {Component} from 'react';
import './CardDisplay.css';

import FontCardContainer from './../FontCardContainer';
import store from './../../redux/store';

type Props = {
  fontsData: Object[],
  addFavorite(newFav: Object): Promise<void>,
  deleteFavorite(id: string): Promise<void>,
  searchQuery: string,
  categoryValue: string,
  variantValues: string[]
};

type State = {
    currentFontsData: Object[],
}

export default class CardDisplay extends Component<Props, State> {

    // state = {
    //     currentFontsData: this.props.fontsData,
    // }

    // componentWillReceiveProps(nextProps:Object){
    //     nextProps.fontsData !== this.props.fontsData 
    //     && 
    //     this.setState({
    //         currentFontsData: nextProps.fontsData,
    //     })
    // }

    render() {
        return(
            <section className="card-display">
                {
                    store.getState().fontData.map((font) => {
                    // this.state.currentFontsData.map((font) => {
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