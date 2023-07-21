import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaximeCompComponent } from './maxime-comp/maxime-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MaximeCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
