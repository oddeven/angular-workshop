import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <input type="text"
           [value]="value"
           [attr.aria-invalid]="error"
           [class.is-valid]="!error"
           (input)="onInput($event.target.value)" />
    <p [innerHTML]="message"
       [style.color]="error ? 'red' : 'green'">
    </p>
  `
})
export class AppComponent {
    value: string = '';
    message: string = 'All is fine...';
    error: boolean = false;

    onInput(value) {
        this.value = value;
        if (this.value.length > 10) {
            this.message = 'Value is too long';
            this.error = true;
        } else {
            this.message = 'All is fine...';
            this.error = false;
        }
    }
}
