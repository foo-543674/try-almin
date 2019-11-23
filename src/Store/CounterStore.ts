import { Store, DispatchedPayload } from "almin";
import { CounterState } from "./CounterState";
export class CounterStore extends Store<CounterState> {
  constructor() {
    super();
    this.state = new CounterState({ count: 0 });
  }

  receivePayload(payload: DispatchedPayload) {
    if (!this.state) return;
    this.setState(this.state.reduce(payload));
  }

  getState() {
    return this.state || new CounterState({ count: 0 });
  }
}
