import {Component, DoCheck, NgZone} from '@angular/core';
import { CheckCounterService } from './services/check-counter.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  private pMsg: string;

  constructor(public counterSvc: CounterService, private checkCounter: CheckCounterService, zone: NgZone) {
    // setInterval(() => {}, 2000);
    zone.runOutsideAngular(() => {
      window.addEventListener('mousemove', (ev) => {
        console.log('Pos', ev.screenX);
        if (ev.screenX > 1150) {
          zone.runGuarded(() => {
            console.log('Change some class member to display side bar');
            this.infoMsg = 'Show Sidebar';
          });
        }
      });
    });
  }

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
