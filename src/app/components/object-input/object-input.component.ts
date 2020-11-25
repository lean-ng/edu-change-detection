import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CounterService} from 'src/app/services/counter.service';

@Component({
  selector: 'app-object-input',
  templateUrl: './object-input.component.html',
  styleUrls: ['./object-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectInputComponent implements OnChanges {

  title = 'Object Input';
  cdStrategy = 'Push';

  @Input()
  counter: { count: number };

  constructor(private counterSvc: CounterService) { }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Object Input', changes);
  }
}
