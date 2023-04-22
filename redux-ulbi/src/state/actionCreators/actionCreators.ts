import { BankActions, Action } from "../actions/actions";
import { Dispatch } from "redux";

export const addCash = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: BankActions.ADD_CASH,
      payload: amount,
    });
  };
};

export const getCash = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: BankActions.GET_CASH,
      payload: amount,
    });
  };
};

export const resetCash = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: BankActions.RESET_CASH,
    });
  };
};
