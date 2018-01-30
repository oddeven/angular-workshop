import { Component, Inject } from '@angular/core';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'calculator',
  providers: [CalculationService],
  template: `
    <h1>Calculator</h1>
    <div>
      <input #a (input)="calculate(a.value, b.value, operator.value)" type="number">
    </div>
    <div>
      <select #operator (input)="calculate(a.value, b.value, operator.value)">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
    </div>
    <div>
      <input #b (input)="calculate(a.value, b.value, operator.value)" type="number">
    </div>
    <div>
      Result: <span class="result">{{result}}</span>
    </div>
  `
})
export class CalculatorComponent {
  result: number = 0;
  calculationService: CalculationService;

  constructor(@Inject(CalculationService) calculationService: CalculationService) {
    this.calculationService = calculationService;
  }

  calculate(a: string, b: string, operator: string) {
    this.result = this.calculationService[operator](+a, +b);
  }
}
