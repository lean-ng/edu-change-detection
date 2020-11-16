import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-object-input',
  templateUrl: './object-input.component.html',
  styleUrls: ['./object-input.component.css']
})
export class ObjectInputComponent {

  title = 'Object Input';
  cdStrategy = 'Default';

  @Input()
  counter: { count: number };

  constructor(private counterSvc: CounterService) { }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }
}
