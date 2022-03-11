import { ExampleDecorator } from "./decorator";

export interface CommandOptions {
  sampling: number;
  multiplicationCoef: number;
  showCircle: boolean;
}

@ExampleDecorator
export class Command {
  observer: (
    sampling: number,
    multiplicationCoef: number,
    showCircle: boolean
  ) => void = () => {
    console.log("je fais rien.");
  };

  opts: CommandOptions = {
    sampling: 23,
    multiplicationCoef: 45,
    showCircle: true,
  };

  constructor(options: Partial<CommandOptions> = {}) {
    this.opts = { ...this.opts, ...options };
    const commandDiv = document.querySelector(".command");
    if (commandDiv === null) {
      throw new Error("bad html...");
    }

    const inputShowCircle = commandDiv.querySelector(
      "input[name='showCircle']"
    );
    if (!(inputShowCircle instanceof HTMLInputElement)) {
      throw new Error("not an input element");
    }
    inputShowCircle.checked = this.opts.showCircle;

    const inputSampling = commandDiv.querySelector("input[name='sampling']");
    if (!(inputSampling instanceof HTMLInputElement)) {
      throw new Error("not an input element");
    }
    const inputMultiplicationCoef = commandDiv.querySelector(
      "input[name='multiplicationCoef']"
    );
    if (!(inputMultiplicationCoef instanceof HTMLInputElement)) {
      throw new Error("not an input element");
    }

    const spanSampling = commandDiv.querySelector(
      "span.sampling.value"
    ) as Element;
    spanSampling.innerHTML = this.opts.sampling + "";
    inputSampling.value = this.opts.sampling + "";
    const spanMC = commandDiv.querySelector(
      "span.multiplicationCoef.value"
    ) as Element;
    spanMC.innerHTML = this.opts.multiplicationCoef + "";
    inputMultiplicationCoef.value = this.opts.multiplicationCoef + "";

    inputSampling.addEventListener("input", () => {
      this.observer(
        +inputSampling.value,
        +inputMultiplicationCoef.value,
        inputShowCircle.checked
      );
      spanSampling.innerHTML = inputSampling.value;
    });
    inputMultiplicationCoef.addEventListener("input", () => {
      this.observer(
        +inputSampling.value,
        +inputMultiplicationCoef.value,
        inputShowCircle.checked
      );
      spanMC.innerHTML = inputMultiplicationCoef.value;
    });
    inputShowCircle.addEventListener("input", () => {
      this.observer(
        +inputSampling.value,
        +inputMultiplicationCoef.value,
        inputShowCircle.checked
      );
    });
  }

  subscribe(
    observer: (
      sampling: number,
      multiplicationCoef: number,
      showCircle: boolean
    ) => void
  ) {
    this.observer = observer;
    this.observer(
      this.opts.sampling,
      this.opts.multiplicationCoef,
      this.opts.showCircle
    );
  }
}
