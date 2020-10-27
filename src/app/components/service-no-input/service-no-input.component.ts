import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-service-no-input',
  templateUrl: './service-no-input.component.html',
  styleUrls: ['./service-no-input.component.css']
})
export class ServiceNoInputComponent implements OnInit {

  title = 'Service - No Input';
  cdStrategy = 'Default';
  count = 0;
  constructor(private counterSvc: CounterService) { }

  ngOnInit(): void {
    this.count = this.counterSvc.counter.count;
  }

  incMutated(): void {
    this.counterSvc.incByMutation();
  }

  incImmutable(): void {
    this.counterSvc.incByRefChange();
  }
}
