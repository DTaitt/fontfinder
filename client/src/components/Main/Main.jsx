import React from 'react';
import './Main.css';

import CardDisplayContainer from './../CardDisplayContainer';
import Sidebar from './../Sidebar/Sidebar';
import store from './../../redux/store';

type Props = {
    fontData: Object[],
    isFontsDataLoaded: boolean,
    favData: Object[],
    isfavDataLoaded: boolean,
    searchQuery: string,
    categoryValue: string,
    variantValues: String[],
    addFavorite(newFav:Object):Promise<void>,
    deleteFavorite(id:string):Promise<void>,
    handleSearch(searchQuery:string):void,
    handleCategory(categoryValue:string):void,
    handleVariants(variantValues:string[]):void,
}

export default function Main (props:Props) {
    return(
        <main>
            <div className="my-container">
                <CardDisplayContainer 
                    fontData = {store.getState().fontData} 
                    // addFavorite={props.addFavorite} 
                    // deleteFavorite={props.deleteFavorite}
                    // searchQuery={props.searchQuery} 
                    // categoryValue={props.categoryValue} 
                    // variantValues={props.variantValues} 
                />
                <Sidebar 
                    favData = {props.favData} 
                    // deleteFavorite={props.deleteFavorite} 
                    // handleSearch={props.handleSearch} 
                    // handleCategory={props.handleCategory} 
                    // handleVariants={props.handleVariants} 
                />
            </div>
        </main>
    )
}