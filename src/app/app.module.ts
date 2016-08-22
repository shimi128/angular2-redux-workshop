import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HttpModule],
  providers   : [{
    provide : LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap   : [AppComponent]
})

export class AppModule {}
