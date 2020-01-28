import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{NgScrollDetectorModule} from "ng-scroll-detector"
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgScrollDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
