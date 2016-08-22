import {Component, ViewEncapsulation} from "@angular/core";
import {Store} from "./app.store";

@Component({
  selector     : 'app',
  styleUrls    : ['../assets/css/bootstrap.css'],
  encapsulation: ViewEncapsulation.None,
  template     : `
    <div class="container">
    
      <div class="page-header clearfix">
        <h1>Angular & Redux</h1>
        <login-form></login-form>                        
      </div>
      
      <div *ngIf="store.state.user">
        <item-form></item-form>      
        <app-list></app-list>                  
      </div>
    </div>
  `,
})

export class AppComponent {
  private store: Store;

  constructor(_store:Store) {
    this.store = _store;
  }
}
