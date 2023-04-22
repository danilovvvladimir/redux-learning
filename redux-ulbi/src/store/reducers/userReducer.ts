import { UserAction, UserActionTypes } from "../../types/actionTypes";

interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UserActionTypes.FETCH_USERS_FAILURE:
      return { users: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
