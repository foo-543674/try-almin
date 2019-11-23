import { UseCase } from "almin";

export class IncrementalCounterUseCase extends UseCase {
  execute() {
    this.dispatch({
      type: "increment"
    });
  }
}
