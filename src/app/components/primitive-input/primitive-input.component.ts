import { Component, Input } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-primitive-input',
  templateUrl: './primitive-input.component.html',
  styleUrls: ['./primitive-input.component.css']
})
export class PrimitiveInputComponent {

  title = 'Primitive Input';
  cdStrategy = 'Default';

  @Input()
  count: number;

  constructor(private counterSvc: CounterService) { }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }
}
