export class Command {
  observer = (sampling: number, multiplicationCoef: number) => {
    console.log("je fais rien.");
  };

  constructor(private sampling = 12, private multiplicationCoef = 23) {
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
    spanSampling.innerHTML = this.sampling + "";
    inputSampling.value = this.sampling + "";
    const spanMC = commandDiv.querySelector(
      "span.multiplicationCoef.value"
    ) as Element;
    spanMC.innerHTML = this.multiplicationCoef + "";
    inputMultiplicationCoef.value = this.multiplicationCoef + "";

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
    this.observer(this.sampling, this.multiplicationCoef);
  }
}
