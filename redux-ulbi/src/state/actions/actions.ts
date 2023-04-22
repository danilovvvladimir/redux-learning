export enum BankActions {
  ADD_CASH = "ADD_CASH",
  GET_CASH = "GET_CASH",
  RESET_CASH = "RESET_CASH",
}

interface AddCashAction {
  type: BankActions.ADD_CASH;
  payload: number;
}

interface GetCashAction {
  type: BankActions.GET_CASH;
  payload: number;
}

interface ResetCashAction {
  type: BankActions.RESET_CASH;
}

export type Action = AddCashAction | GetCashAction | ResetCashAction;
