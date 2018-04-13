import {combineReducers} from 'redux';

const FontFinderApp = combineReducers({
    fontData,
    favData,
    isFontDataLoaded,
    isFavDataLoaded
})

export default FontFinderApp;

export function fontData(fontData = [], action) {
    switch(action.type) {
        case 'ADD_FONT_DATA':
            return [
                ...fontData,
                ...action.data
            ];
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
    console.log(action.data)
    switch (action.type) {
        case 'ADD_FAV_DATA':
            return [
                ...favData,
                action.data
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