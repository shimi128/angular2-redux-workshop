import {Component, ViewEncapsulation} from '@angular/core';

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

export class AppComponent {}
