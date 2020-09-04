import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import dialogsReducer from './dialogsReducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;