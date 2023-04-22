import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/actionTypes";

const URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await fetch(URL);
      const data = await response.json();

      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_FAILURE,
        payload: "Не удалось загрузить пользователей...",
      });
    }
  };
};
