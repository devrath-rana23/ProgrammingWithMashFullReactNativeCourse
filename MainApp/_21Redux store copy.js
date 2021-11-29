import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers';
// We need the store file to have a central storage, which we assign to the provider component in the App.js file.
// create a constant called rootReducer to combine all the created reducers in one place.

const rootReducer = combineReducers({userReducer});

// Actually middleware extends the store's abilities, and lets you write async logic that interacts with the store.
export const Store = createStore(rootReducer, applyMiddleware(thunk));