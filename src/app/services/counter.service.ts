import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: {count: number} = { count: 0 };

  incByMutation(): void {
    ++this.counter.count;
  }

  incByRefChange(): void {
    this.counter = { count: this.counter.count + 1 };
  }
}
