import { Command } from "./Command";
import { Multiplication } from "./Multiplication";
import "./style.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-function
// console.log = () => {};

const main = () => {
  console.log("start");
  const multiplication = new Multiplication();

  const command = new Command({ sampling: 12 });
  console.log("command: ", command);
  command.subscribe((sampling, multiplicationCoef, showCircle) => {
    multiplication.setSampling(sampling);
    multiplication.setMultiplicationCoef(multiplicationCoef);
    multiplication.setShowCircle(showCircle);
    multiplication.draw();
  });
};

main();
