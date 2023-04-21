import { createStore } from "redux";
import { combineReducers } from "redux";
import { cashReducer } from "./reducers/accountReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
});

export const store = createStore(rootReducer, {});
