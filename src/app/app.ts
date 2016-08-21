import {Component} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector   : 'app',
  template: `<h1> Angular & Redux </h1>`,
})

export class AppComponent {

  constructor(api: Http) {

    // api.post('http://localhost:4000/api/login',{
    //   username: 'admin',
    //   password: '1234'
    // })
    //     .map( result => result.json() )
    //     .subscribe(
    //         result => console.log(result),
    //         err => console.log(err)
    //     )

    api.get('http://localhost:4000/api/items')
        .subscribe( result => console.log(result.json()) )
  }


}
