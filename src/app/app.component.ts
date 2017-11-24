import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <list [list]="people"></list>
        <div>
            <h3>New person</h3>
            <input #newPerson type="text">
            <button (click)="add(newPerson.value)">Add</button>
        </div>
        <div>
            <h3>Edit at index</h3>
            <input #editPersonIndex type="number">
            <input #editPerson type="text">
            <button (click)="edit(editPersonIndex.value, editPerson.value)">Edit</button>
        </div>
        <div>
            <h3>Clear</h3>
            <button (click)="clear()">Clear</button>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    people: string[] = ['Andreas', 'Gion'];

    add(name: string) {
        this.people = this.people.slice();
        this.people.push(name);
    }

    clear() {
        this.people = [];
    }

    edit(index: string, name: string) {
        this.people = this.people.slice();
        this.people[index] = name;
    }
}
