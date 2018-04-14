import {combineReducers} from 'redux';

const FontFinderApp = combineReducers({
    fontData,
    favData,
    isFontDataLoaded,
    isFavDataLoaded,
    searchValue,
    categoryValue,
    variantValues,
})

export default FontFinderApp;

export function fontData(fontData = [], action) {
    switch(action.type) {
        case 'INITIALIZE_FONT_DATA':
            return [
                ...fontData,
                ...action.data
            ];
        case 'UPDATE_FONT_DATA_FAV_STATUS':
            return [
                ...fontData,
                action.updatedFav
            ] 
        default:
            return fontData;
    }
}

export function isFontDataLoaded(isFontDataLoaded = false, action) {
    switch (action.type) {
        case 'UPDATE_FONT_DATA_LOADED_STATUS':
            return !isFontDataLoaded;
        default:
            return isFontDataLoaded;
    }
}

export function favData(favData = [], action) {
    switch (action.type) {
        case 'INITIALIZE_FAV_DATA':
            return [
                ...favData,
                ...action.data
            ]
        case 'ADD_FAV_DATA':
            return [
                ...favData,
                action.new
            ]
        case 'REMOVE_FAV_DATA':
            return favData.filter((fav) => {
                return fav.id !== action.favId;
            })
        default:
            return favData;
    }
}

export function isFavDataLoaded(isFavDataLoaded = false, action) {
    switch (action.type) {
        case 'UPDATE_FAV_DATA_LOADED_STATUS':
            return !isFavDataLoaded;
        default:
            return isFavDataLoaded;
    }
}

export function searchValue(searchValue = '', action) {
    switch (action.type) {
        case 'UPDATE_SEARCH_VALUE':
            return action.value
            break;
    
        default:
            return searchValue;
    }
}

export function categoryValue(categoryValue = 'view all', action) {
    switch (action.type) {
        case 'UPDATE_CATEGORY_VALUE':
            return action.value
            break;
        default:
            return categoryValue;
    }
}

export function variantValues(variantValues = [], action) {
    switch (action.type) {
        case 'ADD_VARIANT_VALUE':
            return [
                ...variantValues,
                action.value
            ]
        case 'REMOVE_VARIANT_VALUE':
            return variantValues.filter((variant) => {
                return variant !== action.value;
            })
        default:
            return variantValues;
    }
}