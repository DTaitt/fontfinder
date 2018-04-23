export function initializeFontData(data) {
    return ({
        type: 'INITIALIZE_FONT_DATA',
        data: data,
    })
}

export function updateFontDataFavStatus(id) {
    return({
        type: 'UPDATE_FONT_DATA_FAV_STATUS',
        id: id,
    })
}

export function updateFontDataLoadedStatus() {
    return ({type: 'UPDATE_FONT_DATA_LOADED_STATUS'})
}

export function initializeFavData(data) {
    return ({
      type: 'INITIALIZE_FAV_DATA',
      data: data,
    })
}

export function addFavData(newFav) {
    return ({
        type: "ADD_FAV_DATA",
        new: newFav,
    })
}

export function removeFavData(favId) {
    return ({
        type: 'REMOVE_FAV_DATA',
        favId: favId,
    })
}

export function updateFavDataLoadedStatus() {
    return { type: "UPDATE_FAV_DATA_LOADED_STATUS" };
}

export function updateSearchValue(value){
    return ({
      type: 'UPDATE_SEARCH_VALUE',
      value: value,
    })
}

export function updateCategoryValue(value){
    return ({
      type: 'UPDATE_CATEGORY_VALUE',
      value: value,
    })
}

export function addVariantValue(value){
    return({
        type: "ADD_VARIANT_VALUE",
        value: value,
    })
}

export function removeVariantValue(value) {
    return({
        type: 'REMOVE_VARIANT_VALUE',
        value: value,
    })
}