import {Injectable} from "@angular/core";
import {Store} from "../app.store";
import {USER} from '../constants/actions';

@Injectable()
export class UserActions {

  private store:Store;

  constructor(_store:Store) {
    this.store = _store;
  }

  login(info) {
    this.store.dispatch({
      type: USER.LOGIN,
      payload: info
    })
  }

  logout() {
    this.store.dispatch({
      type: USER.LOGOUT
    })
  }
}