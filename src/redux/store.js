import { legacy_createStore as createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer.js";
import { customerReducer } from "./customerReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

let rootReducer = combineReducers({
    cashReducer,
    customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
