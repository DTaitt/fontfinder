// @flow
import React, { Component, Fragment } from "react";
import store from './../redux/store';
import { toggleFavStatus } from './../redux/reducers';
import { UPDATE_FAV_STATUS } from './../redux/actions';

import FontCard from './FontCard/FontCard';

type Props = {
  id: string,
  family: string,
  category: string,
  url: string,
  variants: string[],
  addFavorite(newFav: Object): Promise<void>,
  deleteFavorite(id: string): Promise<void>,
};

type State = {
  formattedFontFamily: string,
  variants: string[],
  isInFav: boolean,
};

export default class FontCardContainer extends Component<Props, State> {
  state = {
    formattedFontFamily: "",
    variants: this.props.variants,
    isInFav: false
  };

  formatFontFamily = this.formatFontFamily.bind(this);
  formatVariantValues = this.formatVariantValues.bind(this);
  changeFavStatus = this.changeFavStatus.bind(this);

  formatFontFamily() {
    let splitFontFamily = this.props.family.split(" ");
    let joinedFontFamily = splitFontFamily.join("+");
    this.setState({
      formattedFontFamily: joinedFontFamily
    });
  }

  formatVariantValues() {
    let tempVariants = [];
    this.state.variants.forEach(variant => {
      switch (variant) {
        case "100":
          variant = "Thin";
          tempVariants.push("Thin");
          break;
        case "100italic":
          variant = "Thin Italic";
          tempVariants.push("Thin Italic");
          break;
        case "200":
          variant = "Extra-Light";
          tempVariants.push("Extra-Light");
          break;
        case "200italic":
          variant = "Extra-Light Italic";
          tempVariants.push("Extra-Light Italic");
          break;
        case "300":
          variant = "Light";
          tempVariants.push("Light");
          break;
        case "300italic":
          variant = "Light Italic";
          tempVariants.push("Light Italic");
          break;
        case "400":
          variant = "Regular";
          tempVariants.push("Regular");
          break;
        case "400italic":
          variant = "Italic";
          tempVariants.push("Italic");
          break;
        case "500":
          variant = "Medium";
          tempVariants.push("Medium");
          break;
        case "500italic":
          variant = "Medium Italic";
          tempVariants.push("Medium Italic");
          break;
        case "600":
          variant = "Semi-Bold";
          tempVariants.push("Semi-Bold");
          break;
        case "600italic":
          variant = "Semi-Bold Italic";
          tempVariants.push("Semi-Bold Italic");
          break;
        case "700":
          variant = "Bold";
          tempVariants.push("Bold");
          break;
        case "700italic":
          variant = "Bold Italic";
          tempVariants.push("Bold Italic");
          break;
        case "800":
          variant = "Extra-Bold";
          tempVariants.push("Extra-Bold");
          break;
        case "800italic":
          variant = "Extra-Bold Italic";
          tempVariants.push("Extra-Bold Italic");
          break;
        case "900":
          variant = "Black";
          tempVariants.push("Black");
          break;
        case "900italic":
          variant = "Black Italic";
          tempVariants.push("Black Italic");
          break;
        default:
          tempVariants.push(variant);
          break;
      }
    });

    this.setState({
      variants: tempVariants
    });
  }

  componentDidMount() {
    this.formatFontFamily();
    this.formatVariantValues();
  }

  changeFavStatus() {
    // this.setState(
    //   prevState => ({
    //     isInFav: !prevState.isInFav
    //   }),
    //   () => {
    //     this.addOrRemoveFav();
    //   }
    // );
    // store.dispatch({ type: "ADD_TO_FAVS" });
    // // this.addOrRemoveFav();
    // this.props.addFavorite({
    //   id: this.props.id,
    //   family: this.props.family,
    //   category: this.props.category,
    //   url: this.props.url
    // });
    this.newFavStatusFunc()
  }

  newFavStatusFunc() {
    switch (store.getState().isInFav) {
      case true:
        store.dispatch({type: 'REMOVE_FROM_FAVS'})
        console.log(store.getState())
        // store.dispatch({type: 'ADD_FAV'})
        // this.props.deleteFavorite(this.props.id)
      break;
      case false:
        store.dispatch({ type: "ADD_TO_FAVS" })
        console.log(store.getState());
        store.dispatch({
          type: 'ADD_FAV',
          id: this.props.id,
          family: this.props.family,
          category: this.props.category,
          url: this.props.url
        })
      default:
        break;
    }
  }

  // addOrRemoveFav() {
  //   store.getState()
  //     ? this.props.addFavorite({
  //         id: this.props.id,
  //         family: this.props.family,
  //         category: this.props.category,
  //         url: this.props.url
  //       })
  //     : this.props.deleteFavorite(this.props.id);
  // }

  render() {
    return (
        <Fragment>
            <FontCard 
                id = {this.props.family}
                family = {this.props.family}
                category = {this.props.category}
                url = {`https://fonts.google.com/specimen/${this.props.family}`}
                addFavorite={this.props.addFavorite}
                deleteFavorite={this.props.deleteFavorite}
                variants = {this.props.variants}
                changeFavStatus = {this.changeFavStatus}
                addOrRemoveFav={this.addOrRemoveFav}
                formattedFontFamily={this.state.formattedFontFamily}
                isInFav={this.state.isInFav}
            />
        </Fragment>
    );
  }
}
