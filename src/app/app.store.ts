import {createStore, applyMiddleware, compose} from 'redux';
import {RootReducer} from './reducers/root';
import {Auth} from "./middlewars/auth.middleware";
import {Injectable} from "@angular/core";

@Injectable()
export class Store {

  private store;

  constructor(auth: Auth) {
    this.store = createStore(RootReducer, compose(
        applyMiddleware(auth.middleware),
        window.devToolsExtension && window.devToolsExtension()
    ));
  }

  get state(){
    return this.store.getState();
  }

  dispatch(action){
    this.store.dispatch(action)
  }
}