import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CharacterCountPipe} from './character-count-pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CharacterCountPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
