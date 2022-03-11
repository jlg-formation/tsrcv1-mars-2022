import { Command } from "./Command";
import { Multiplication } from "./Multiplication";
import "./style.scss";

const main = () => {
  console.log("start");
  const multiplication = new Multiplication();

  const command = new Command(12, 45);
  command.subscribe((sampling, multiplicationCoef) => {
    multiplication.setSampling(sampling);
    multiplication.setMultiplicationCoef(multiplicationCoef);
    multiplication.draw();
  });
};

main();
