import {USER} from "../constants/actions";

export function userReducer(state = null, action) {

  switch (action.type) {
    case USER.LOGIN_SUCCESS:
      return { user: action.payload };

    case USER.LOGOUT:
      return null;

    default:
      return state;
  }
}