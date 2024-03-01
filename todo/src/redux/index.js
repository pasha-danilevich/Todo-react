import { createStore, combineReducers } from "redux";

import { taskReducer } from "./taskReducer"; 
import { activeItemReducer } from "./activeItemReducer"; 


const rootReducer = combineReducers({
    activeItem: activeItemReducer,
    tasks: taskReducer,
})

export const store = createStore(rootReducer);