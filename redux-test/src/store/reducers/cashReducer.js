const initialState = 10;

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";
const RESET_CASH = "RESET_CASH";

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return state + action.payload;
    case GET_CASH:
      return state - action.payload;
    case RESET_CASH:
      return initialState;
    default:
      return state;
  }
};

export const addCash = (amount) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CASH,
      payload: amount,
    });
  };
};

export const getCash = (amount) => {
  return (dispatch) => {
    dispatch({
      type: GET_CASH,
      payload: amount,
    });
  };
};

export const resetCash = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_CASH,
    });
  };
};
