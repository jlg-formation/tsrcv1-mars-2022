import { Multiplication } from "./Multiplication";
import "./style.scss";

const main = () => {
  console.log("start");
  const multiplication = new Multiplication();

  multiplication.setN(45);
  multiplication.setM(6);
  multiplication.draw();
};

main();
