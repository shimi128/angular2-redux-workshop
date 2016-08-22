import {USER} from "../constants/actions";

export function userReducer(state = null, action) {

  switch (action.type) {
    case USER.LOGIN:
      return {user: action.payload};

    case USER.LOGOUT:
      return {user: null};

    default:
      return state;
  }
}