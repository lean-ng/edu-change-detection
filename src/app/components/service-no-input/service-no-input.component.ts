import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import {CounterService} from 'src/app/services/counter.service';

@Component({
  selector: 'app-service-no-input',
  templateUrl: './service-no-input.component.html',
  styleUrls: ['./service-no-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceNoInputComponent implements OnInit, DoCheck {

  title = 'Service - No Input';
  cdStrategy = 'Push';

  counter: { count: number };

  private previousCount: number;

  constructor(private counterSvc: CounterService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.counter = this.counterSvc.counter;
    this.previousCount = this.counter.count;
  }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }


  // Called each change detection cycle
  ngDoCheck(): void {
    // Ref Change ?
    if (this.counter !== this.counterSvc.counter) {
      this.counter = this.counterSvc.counter;
    }
    // Need to render new count?
    if (this.previousCount !== this.counter.count) {
      this.cdRef.markForCheck();
      this.previousCount = this.counter.count;
    }
  }
}
