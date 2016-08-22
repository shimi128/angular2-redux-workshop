import {createStore, applyMiddleware} from 'redux';
import {RootReducer} from './reducers/root';
import {Auth} from "./middlewars/auth.middleware";
import {Injectable} from "@angular/core";

@Injectable()
export class Store {

  private store;

  constructor(auth: Auth) {
    this.store = createStore(RootReducer, applyMiddleware(auth.middleware));
  }

  get state(){
    return this.store.getState();
  }

  dispatch(action){
    this.store.dispatch(action)
  }
}