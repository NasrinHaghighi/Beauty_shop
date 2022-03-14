import { combineReducers } from "redux";
import { openSidebarReducer } from "./banner";
import { openSubmenuReducer } from "./banner";
import { productsReducer } from './products'
import { sortReducer } from './products'
import { amountReducer } from './products'
import { SelectedColorReducer } from './products'
import { cartReducer } from "./cart";
import { totalReducer } from './cart'
import { discontReducer } from './cart'
import { isLoginReducer } from './login'
import { filterReducer } from './products'
import { filterOptionReducer } from './products'
import { userAddressReducer } from './login'
import { userFavoriteReducer } from './login'




export const reducers = combineReducers({
    sidebarIsOpen: openSidebarReducer,
    submenu: openSubmenuReducer,
    products: productsReducer,
    sort: sortReducer,
    amount: amountReducer,
    cart: cartReducer,
    selectedColor: SelectedColorReducer,
    total: totalReducer,
    discont: discontReducer,
    isLogin: isLoginReducer,
    filtered: filterReducer,
    filterOption: filterOptionReducer,
    userAddress: userAddressReducer,
    userFavorite: userFavoriteReducer


});