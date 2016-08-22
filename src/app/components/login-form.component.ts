import {Component} from "@angular/core";
import {Store} from "../app.store";

@Component({
  selector: 'login-form',
  template: `

        <button *ngIf="!store.state.user"
                class=" btn btn-sm btn-primary pull-right">login</button>

        <form *ngIf="store.state.user">
          <div class="form-group">            
            <input type="text" 
                   class="form-control" 
                   placeholder="username">
          </div>
  
          <div class="form-group">            
            <input type="password" 
                   class="form-control" 
                   placeholder="Password">
          </div>
  
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    `
})

export class LoginFormComponent {

  private store:Store;

  constructor(_store:Store) {
    this.store = _store;
  }

}