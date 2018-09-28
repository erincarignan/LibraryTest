import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestlibModule } from 'testlib';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestlibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
