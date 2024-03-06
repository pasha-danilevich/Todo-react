import { taskReducer } from "./taskReducer"; 
import { activeItemReducer } from "./activeItemReducer"; 

import { createStore, combineReducers, applyMiddleware } from "redux";

import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    activeItem: activeItemReducer,
    tasks: taskReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));