import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CounterService} from '../../services/counter.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveComponent implements OnInit {

  title = 'Reactive - No Input';
  cdStrategy = 'Push';

  counter$: Observable<{ count: number }>;
  // count = 0;

  constructor(private counterSvc: CounterService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.counter$ = this.counterSvc.counter$;
    // Must unsubscribe
    // this.counter$.subscribe(counter => {
    //   this.count = counter.count;
    //   this.cdRef.markForCheck();
    // } );
  }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }

}
