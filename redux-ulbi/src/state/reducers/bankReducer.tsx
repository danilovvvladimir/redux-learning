import { Action, BankActions } from "../actions/actions";

const initialState: number = 0;

const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case BankActions.ADD_CASH:
      return state + action.payload;
    case BankActions.GET_CASH:
      return state - action.payload;
    case BankActions.RESET_CASH:
      return initialState;
    default:
      return state;
  }
};

export default bankReducer;
