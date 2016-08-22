import {Component, ViewEncapsulation} from '@angular/core';
import {Store} from "./app.store";

@Component({
  selector   : 'app',
  styleUrls:['../assets/css/bootstrap.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="container">
      <h1 class="page-header"> Angular & Redux </h1>
     </div>
  `,
})

export class AppComponent {

  constructor(store: Store) {
    console.log(store.state);
  }

}
