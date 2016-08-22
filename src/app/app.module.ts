import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {Store} from "./app.store";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HttpModule],
  providers   : [{
    provide : LocationStrategy,
    useClass: HashLocationStrategy
  }, Store ],
  bootstrap   : [AppComponent]
})

export class AppModule {}
