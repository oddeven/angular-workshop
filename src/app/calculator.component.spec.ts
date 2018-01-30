import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator.component';

describe('Calculator Component', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
  });

  it('should display Calculator title', () => {
    const titleElement = element.querySelector('h1');
    expect(titleElement.textContent).toContain('Calculator');
  });

  it('should calculate add correctly', () => {
    component.calculate('2', '2', 'add');
    expect(component.result).toEqual(4);
    fixture.detectChanges();
    const resultElement = element.querySelector('.result');
    expect(+resultElement.textContent).toEqual(component.result);
  });
});
