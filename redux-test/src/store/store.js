import { createStore, combineReducers, applyMiddleware } from "redux";

import { cashReducer } from "./reducers/cashReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cash: cashReducer });
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
