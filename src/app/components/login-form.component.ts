import {Component} from "@angular/core";
import {Store} from "../app.store";
import {UserActions} from "../actions/user.actions";

@Component({
  selector: 'login-form',
  template: `
        <button *ngIf="store.state.user"
                (click)="user.logout()"
                class=" btn btn-sm btn-primary pull-right">
            logout {{ store.state.user.user.first_name }}           
        </button>

        <div *ngIf="!store.state.user">
          <div class="form-group">            
            <input type="text" 
                   class="form-control"
                   #username 
                   placeholder="username">
          </div>
  
          <div class="form-group">            
            <input type="password"
                   #password
                   class="form-control" 
                   placeholder="Password">
          </div>
  
        <button type="submit" 
                class="btn btn-default"
                (click)="user.login(username.value, password.value)">Submit</button>
        
      </div>
    `
})

export class LoginFormComponent {

  private store:Store;
  private user: UserActions;
  private info: any;

  constructor(_store:Store, _user: UserActions) {
    this.store = _store;
    this.user  = _user;
    this.info  = {};
  }

}