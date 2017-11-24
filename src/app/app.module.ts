import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CollapsibleComponent} from './collapsible-component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CollapsibleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
