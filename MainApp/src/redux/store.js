import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers';

// create a constant called rootReducer to combine all the created reducers in one place.

const rootReducer = combineReducers({userReducer});

// Actually middleware extends the store's abilities, and lets you write async logic that interacts with the store.
export const Store = createStore(rootReducer, applyMiddleware(thunk));