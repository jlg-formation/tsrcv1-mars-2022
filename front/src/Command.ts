export class Command {
  observer = (sampling: number, multiplicationCoef: number) => {
    console.log("je fais rien.");
  };
  constructor() {
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

    inputSampling.addEventListener("input", () => {
      this.observer(+inputSampling.value, +inputMultiplicationCoef.value);
    });
    inputMultiplicationCoef.addEventListener("input", () => {
      this.observer(+inputSampling.value, +inputMultiplicationCoef.value);
    });
  }

  subscribe(observer: (sampling: number, multiplicationCoef: number) => void) {
    this.observer = observer;
  }
}
