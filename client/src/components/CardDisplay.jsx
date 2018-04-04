import React from 'react';
import './CardDisplay.css';

import FontCard from './FontCard';

export default function DisplayPanel(props) {
    let fontsData = props.fontsData;
    console.log(props.variantValues)

    function filterOnSearchQuery() {
        if (props.searchQuery !== '' && fontsData !== undefined) {
            fontsData = fontsData.filter(
                (font) => {
                    return font.family.toLowerCase().indexOf(props.searchQuery) !== -1
                }
            )
        }
    }

    function filterOnCategoryValue() {
        if (props.categoryValue !== '' && fontsData !== undefined) {
            fontsData = fontsData.filter(
                (font) => {
                    return font.category.indexOf(props.categoryValue) !== -1
                }
            )
        }    
    }

    filterOnSearchQuery()
    filterOnCategoryValue()
    filterOnVariantValues(props.variantValues)

    // if (props.variantValues.length > 0 && fontsData !== undefined) {
    //         fontsData = fontsData.filter(
    //             (font) => {
    //                 // console.log(font.title.split())
    //                 // console.log(font)
    //                 // return font.variants.indexOf(props.categoryValue) !== -1
    //             }
    //         )
    //     }  

    function filterOnVariantValues(variantValuesArr) {
        // console.log(fontsData)
        // let tempFontData = [];
        // if (props.variantValues.length > 0 && fontsData !== undefined) {
        //     variantValuesArr.forEach(variantValue => {
        //         tempFontData = [...tempFontData, fontsData.filter(
        //             (font) => {
        //                 // console.log(font.title.split())
        //                 // console.log(font)
        //                 return font.variants.indexOf(variantValue) !== -1
        //             }
        //         )] 
        //     });
        // }
        console.log(variantValuesArr)
        let tempData = [];
        if (props.variantValues.length > 0 && fontsData !== undefined) {
            variantValuesArr.forEach((vVal) => {
                tempData = fontsData.filter(
                    (font) => {
                        // console.log(font.title.split())
                        // console.log(font)
                        return font.variants.indexOf(vVal) !== -1
                    }
                )
                console.log(tempData)
            })
        }  
        // console.log(fontsData)  
        //
    }

    

    return(
        
        <section className="card-display">
            {
                fontsData.map((font) => {
                    return (
                        <FontCard 
                            key = {font.family}
                            id = {font.family}
                            family = {font.family}
                            category = {font.category}
                            url = {`https://fonts.google.com/specimen/${font.family}`}
                            addFavorite={props.addFavorite}
                        />
                    )
                })
            }
        </section>
    )
}