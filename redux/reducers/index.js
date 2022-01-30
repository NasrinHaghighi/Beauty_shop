import { combineReducers } from "redux";
import { openSidebarReducer } from "./banner";
import { openSubmenuReducer } from "./banner";
import { productsReducer } from './products'



export const reducers = combineReducers({
    sidebarIsOpen: openSidebarReducer,
    submenu: openSubmenuReducer,
    products: productsReducer
});