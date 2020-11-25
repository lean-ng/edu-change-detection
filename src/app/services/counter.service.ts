import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  counter: {count: number} = { count: 0 };
  counter$ = new BehaviorSubject<{ count: number }>(this.counter);

  incByMutation(): void {
    ++this.counter.count;
    this.counter$.next(this.counter);
  }

  incByRefChange(): void {
    this.counter = { count: this.counter.count + 1 };
    this.counter$.next(this.counter);
  }
}
