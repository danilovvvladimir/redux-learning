import bankReducer from "./reducers/bankReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  bank: bankReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;

export type State = ReturnType<typeof rootReducer>;
