import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {APP, USER} from "../constants/actions";

@Injectable()
export class Auth {
  private http:Http;
  private URL:string;

  constructor(_http:Http) {
    this.http = _http;
    this.URL  = 'http://localhost:4000/api/login';
  }

  middleware = store => next => action => {

    if (action.type !== USER.LOGIN) {
      return next(action)
    } else {

      const successHandler = result => next({
        type   : USER.LOGIN_SUCCESS,
        payload: result.json()
      });

      const errorHandler = error => next({
        type   : USER.LOGIN_FAILED,
        payload: error.json()
      });

      this.http.post(this.URL, action.payload)
          .subscribe(successHandler, errorHandler);

      return next({type: APP.LOADING})
    }
  }
}

