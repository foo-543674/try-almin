import { DispatchedPayload } from "almin";

export class CounterState {
  constructor({ count }: { count: number }) {
    this.count = count;
  }

  readonly count: number;

  reduce(payload: DispatchedPayload) {
    switch (payload.type) {
      case "increment":
        return new CounterState({
          count: this.count + 1
        });
      default:
        return this;
    }
  }
}
