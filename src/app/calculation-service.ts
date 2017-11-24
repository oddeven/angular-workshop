import {Injectable, Inject} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {LogService} from './log-service';

@Injectable()
export class CalculationService {
    result: Subject<number> = new Subject();
    logService: LogService;

    constructor(@Inject(LogService) logService: LogService) {
        this.logService = logService;
    }

    add(a: number, b: number): Subject<number> {
        this.logService.log(`Calculating ${a} plus ${b}`);
        setTimeout(() => this.result.next(a + b), 1000);
        return this.result;
    }

    subtract(a: number, b: number): Subject<number> {
        this.logService.log(`Calculating ${a} minus ${b}`);
        setTimeout(() => this.result.next(a - b), 1000);
        return this.result;
    }

    multiply(a: number, b: number): Subject<number> {
        this.logService.log(`Calculating ${a} multiplied with ${b}`);
        setTimeout(() => this.result.next(a * b), 1000);
        return this.result;
    }

    divide(a: number, b: number): Subject<number> {
        this.logService.log(`Calculating ${a} divided by ${b}`);
        setTimeout(() => this.result.next(a / b), 1000);
        return this.result;
    }
}
