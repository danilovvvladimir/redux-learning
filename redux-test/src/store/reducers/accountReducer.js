const DEPOSIT_CASH = "DEPOSIT_CASH";
const WITHDRAW_CASH = "WITHDRAW_CASH";

export const cashReducer = (state = 0, action) => {
  switch (action.type) {
    case DEPOSIT_CASH:
      return state + action.payload;
    case WITHDRAW_CASH:
      return state - action.payload;

    default:
      return state;
  }
};

export const depositMoney = (amount) => {
  return (dispatch) => ({
    type: DEPOSIT_CASH,
    payload: amount,
  });
};

export const withdrawMoney = (amount) => {
  return (dispatch) => ({
    type: WITHDRAW_CASH,
    payload: amount,
  });
};
