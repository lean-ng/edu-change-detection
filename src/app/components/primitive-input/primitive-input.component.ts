import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CounterService} from 'src/app/services/counter.service';

@Component({
  selector: 'app-primitive-input',
  templateUrl: './primitive-input.component.html',
  styleUrls: ['./primitive-input.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PrimitiveInputComponent implements  OnChanges {

  title = 'Primitive Input';
  cdStrategy = 'Push';

  @Input()
  count: number;

  constructor(private counterSvc: CounterService) { }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Primitive', changes);
  }
}
