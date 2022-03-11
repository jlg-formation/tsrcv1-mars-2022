import { Multiplication } from "./Multiplication";
import "./style.scss";

const main = () => {
  console.log("start");
  const multiplication = new Multiplication();

  multiplication.setSampling(45);
  multiplication.setMultiplicationCoef(6);
  multiplication.draw();
};

main();
