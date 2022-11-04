import { legacy_createStore as createStore } from "redux";
import cashReducer from "./cashReducer";

export const store = createStore(cashReducer);
