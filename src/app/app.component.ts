import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <input type="text"
               [value]="value"
               [attr.aria-invalid]="error"
               [class.is-valid]="!error"
               (input)="onInput($event.target.value)" />
        <button (click)="reset()">Reset</button>
        <p [innerHTML]="message"
           [style.color]="'red'" 
           [style.display]="error ? 'block' : 'none'">
        </p>
    `
})
export class AppComponent {
    value: string = '';
    message: string = 'Value is too long';
    error: boolean = false;

    onInput(value) {
        this.value = value;
        this.error = this.value.length > 10;
    }

    reset() {
        this.value = '';
        this.error = false;
    }
}