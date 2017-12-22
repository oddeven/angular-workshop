import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator.component';
import { CalculationService } from './calculation.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
