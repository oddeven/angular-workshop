import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <p *ngFor="let message of messages; let i = index">{{i}}: {{message | toUpper}}</p>
        <input #inp type="text">
        <button (click)="addMessage(inp.value)">Add</button>
    `
})
export class AppComponent {
    messages: string[] = ['One', 'Two', 'Three'];

    addMessage(message: string) {
        this.messages.push(message);
    }
}
