import { createReducer, on } from '@ngrx/store';
import {decrement, increment, reset, set} from "../actions";

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(set, (state, payload) => payload.value),
  on(reset, (state) => 0)
);
