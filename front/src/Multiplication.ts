import { Point } from "./Point";

const svgns = "http://www.w3.org/2000/svg";

const cx0 = 500;
const cy0 = 500;
const r0 = 400;
const r = "10";

export enum CircleEnum {
  VISIBLE,
  HIDDEN,
}

type Integer = number;

export class Multiplication {
  m = 2;
  n: Integer = 10;
  showCircle = CircleEnum.HIDDEN;

  clean() {
    const lineGroup = document.querySelector("svg g.lines") as Element;
    lineGroup.innerHTML = "";
    const cirlceGroup = document.querySelector(
      "svg g.small-circles"
    ) as Element;
    cirlceGroup.innerHTML = "";
  }

  draw(): void {
    this.clean();
    if (this.showCircle === CircleEnum.VISIBLE) {
      this.drawSmallCircles();
    }
    this.drawLines();
  }

  drawLine(start: Integer, end: Integer): void {
    const { x: x1, y: y1 } = this.getPoint(start);
    const { x: x2, y: y2 } = this.getPoint(end);

    const group = document.querySelector("svg g.lines");
    if (group === null) {
      throw new Error("cannot find group of lines");
    }

    const line = document.createElementNS(svgns, "line");

    line.setAttributeNS(null, "x1", x1 + "");
    line.setAttributeNS(null, "y1", y1 + "");
    line.setAttributeNS(null, "x2", x2 + "");
    line.setAttributeNS(null, "y2", y2 + "");

    group.appendChild(line);
  }

  drawLines() {
    for (let i = 0; i < this.n; i++) {
      this.drawLine(i, i * this.m);
    }
  }

  drawSmallCircles() {
    const group = document.querySelector("svg g.small-circles") as Element;

    for (let i = 0; i < this.n; i++) {
      console.log("i: ", i);
      const circle = document.createElementNS(svgns, "circle");
      const { x, y } = this.getPoint(i);

      circle.setAttributeNS(null, "cx", x + "");
      circle.setAttributeNS(null, "cy", y + "");
      circle.setAttributeNS(null, "r", r);
      group.appendChild(circle);
    }
  }

  getPoint(pointId: Integer): Point {
    const angle = (pointId * (2 * Math.PI)) / this.n;
    const x = cx0 + r0 * Math.cos(angle);
    const y = cy0 + r0 * Math.sin(angle);

    return { x, y };
  }

  setMultiplicationCoef(m: unknown) {
    if (typeof m === "number") {
      this.m = m;
    }
  }

  setSampling(n?: Integer) {
    if (n === undefined) {
      this.n = 0;
      return;
    }
    this.n = n;
  }

  setShowCircle(showCircle: boolean) {
    if (showCircle) {
      this.showCircle = CircleEnum.VISIBLE;
    } else {
      this.showCircle = CircleEnum.HIDDEN;
    }
  }
}
