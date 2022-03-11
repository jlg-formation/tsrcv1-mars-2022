export interface CommandOptions {
  sampling: number;
  multiplicationCoef: number;
}

export class Command {
  observer = (sampling: number, multiplicationCoef: number) => {
    console.log("je fais rien.");
  };

  opts: CommandOptions = {
    sampling: 23,
    multiplicationCoef: 45,
  };

  constructor(options: Partial<CommandOptions> = {}) {
    this.opts = { ...this.opts, ...options };
    const commandDiv = document.querySelector(".command");
    if (commandDiv === null) {
      throw new Error("bad html...");
    }
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
      this.observer(+inputSampling.value, +inputMultiplicationCoef.value);
      spanSampling.innerHTML = inputSampling.value;
    });
    inputMultiplicationCoef.addEventListener("input", () => {
      this.observer(+inputSampling.value, +inputMultiplicationCoef.value);
      spanMC.innerHTML = inputMultiplicationCoef.value;
    });
  }

  subscribe(observer: (sampling: number, multiplicationCoef: number) => void) {
    this.observer = observer;
    this.observer(this.opts.sampling, this.opts.multiplicationCoef);
  }
}
