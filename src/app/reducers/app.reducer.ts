import {APP, USER} from "../constants/actions";

const initialState = {
  loading: false
};

export function appReducer(state = initialState, action) {

  switch (action.type) {
    case APP.LOADING:
      return Object.assign({}, state, {loading: true});

    case APP.READY:
    case USER.LOGIN_SUCCESS:
      return Object.assign({}, state, {loading: false});

    default:
      return state;
  }
}
