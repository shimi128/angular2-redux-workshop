import {Component, ViewEncapsulation} from "@angular/core";

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
      
      <item-form></item-form>      
      <app-list></app-list>                  
      
    </div>
  `,
})

export class AppComponent {}
