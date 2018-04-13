import {createStore} from 'redux';

import FontFinderApp from './reducers';


const store = createStore(FontFinderApp);
//console.log(store.getState())
// store.dispatch({ type: "UPDATE_FAV_STATUS" });
// console.log(store.getState());
// store.dispatch({ type: "UPDATE_FAV_STATUS" });
// console.log(store.getState());
export default store;