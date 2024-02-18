import { Component, inject } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { decrement, increment, reset, set } from '../../actions';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly count$: Observable<number>
  readonly store = inject(Store<{ count: number }>)

  constructor() {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  set(): void {
    this.store.dispatch(set({ value: 10 }));
  }
}
