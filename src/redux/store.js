import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import { cashReducer } from "./cashReducer.js";
import { customerReducer } from "./customerReducer.js";
import { asyncDataReducer } from "./asyncDataReducer.js";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    cashReducer,
    customerReducer,
    asyncDataReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
