import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ToUpperPipe} from './to-upper-pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ToUpperPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
