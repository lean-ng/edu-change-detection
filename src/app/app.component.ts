import { Component, DoCheck } from '@angular/core';
import { CheckCounterService } from './services/check-counter.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  constructor(public counterSvc: CounterService, private checkCounter: CheckCounterService) {}

  ngDoCheck(): void {
    this.checkCounter.checkCount = 0;
  }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }
}
