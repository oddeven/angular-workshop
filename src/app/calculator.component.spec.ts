import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  // TODO: Add test that confirms 2 + 2 = 4 using the calculator component.
  // Verify that the result span in the DOM matches the result of the component.
  // Tip: You can use fixture.detectChanges() to trigger change detection.
});
