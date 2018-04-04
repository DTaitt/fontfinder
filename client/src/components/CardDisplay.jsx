import React from 'react';
import './CardDisplay.css';

import FontCard from './FontCard';

export default function DisplayPanel(props) {
    let fontsData = props.fontsData;
    // console.log(props.variantValues)

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

    function filterOnVariantValues(variantValuesArr) {
        let tempData = [];
        // console.log(props.variantValues);
        // console.log(fontsData)
        if (props.variantValues.length > 0 && fontsData !== undefined) {
            variantValuesArr.forEach((vVal) => {
                tempData = [
                    ...tempData,
                    ...fontsData.filter(
                        (font) => {
                            return font.variants.indexOf(vVal) !== -1
                        }
                    )
                ]
            })
        }  

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        let filteredTempData = tempData.filter( onlyUnique ); 
        fontsData = filteredTempData;
    }

    // console.log(fontsData)
    filterOnSearchQuery()
    // console.log(fontsData);
    filterOnCategoryValue()
    // console.log(fontsData);
    props.variantValues.length > 0 && filterOnVariantValues(props.variantValues)

    console.log(fontsData)
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