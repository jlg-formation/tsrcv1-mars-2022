import { Command } from "./Command";
import { Multiplication } from "./Multiplication";
import "./style.scss";

const main = () => {
  console.log("start");
  const multiplication = new Multiplication();

  multiplication.setSampling(45);
  multiplication.setMultiplicationCoef(6);
  multiplication.draw();

  const command = new Command();
  command.subscribe((sampling, multiplicationCoef) => {
    multiplication.setSampling(sampling);
    multiplication.setMultiplicationCoef(multiplicationCoef);
    multiplication.draw();
  });
};

main();
