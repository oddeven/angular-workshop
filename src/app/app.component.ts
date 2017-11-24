import {Component, Inject} from '@angular/core';
import {LogService} from './log-service';

@Component({
  selector: 'app-root',
  template: `
    <calculator></calculator>
  `
})
export class AppComponent {
  constructor(@Inject(LogService) logService: LogService) {
    logService.log('Application started');
  }
}
