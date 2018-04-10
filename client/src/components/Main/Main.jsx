import React, { Component } from 'react';
import axios from 'axios';
import {ProgressBar} from 'react-materialize';
import './Main.css';

import CardDisplay from './../CardDisplay/CardDisplay';
import Sidebar from './../Sidebar/Sidebar';

type Props = {
    fontsData: Object[],
    isFontsDataLoaded: boolean,
    favData: Object[],
    isfavDataLoaded: boolean,
    searchQuery: string,
    categoryValue: string,
    variantValues: String[],
}

export default function Main (props:Props) {
    return(
        <main>
            <div className="my-container">
                <CardDisplay 
                    fontsData = {props.fontsData} 
                    addFavorite={props.addFavorite} 
                    deleteFavorite={props.deleteFavorite}
                    searchQuery={props.searchQuery} 
                    categoryValue={props.categoryValue} 
                    variantValues={props.variantValues} 
                />
                <Sidebar 
                    favData = {props.favData} 
                    deleteFavorite={props.deleteFavorite} 
                    handleSearch={props.handleSearch} 
                    handleCategory={props.handleCategory} 
                    handleVariants={props.handleVariants} 
                />
            </div>
        </main>
    )
}